import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { MainDiv, Item, Search } from "../component/index";
import { useGithubAPI } from "../hooks/index";
import loadingImg from "../asset/img/loading.gif";

import "../asset/style/Portfolio.css";
import { useProjectContext } from "../context/ProjectContext";

function Portfolio() {
  const [pageNum, setPageNum] = useState(1);
  const [pageQuery, setPageQuery] = useSearchParams();
  const navigate = useNavigate();
  let isSearch = pageQuery.get("search") || false;
  const res = useGithubAPI("list", null, isSearch, pageNum);
  const [loading, setLoading]= useState(true);
  const {resultValue, resultDispatch}= useProjectContext();
  let result,pagination, loadingValue;
  if(resultValue !== undefined){
    result= resultValue.result !== undefined ? resultValue.result: undefined;
    pagination = resultValue.pagination !== undefined ? resultValue.pagination: undefined;
    loadingValue = resultValue.loading !== undefined ? resultValue.loading: false;
  }else{
    result= undefined;
    pagination= undefined;
    loadingValue= true;
  }

  useEffect(()=>{
    setLoading(loadingValue);
  }, [loadingValue])
 

  useEffect(()=>{
    let JSONRes= JSON.parse(res);
    if(isSearch) return;
    resultDispatch({
      type: "update",
      value: JSONRes
    });
    setLoading(false)
  }, [resultDispatch, res, isSearch]);


  useEffect(()=>{
    let pn= pageQuery.get('page') || 1;
    setPageNum(pn);
  }, [pageQuery]);

  const handleNavigation= (e, n)=>{
    e.preventDefault();
    setPageQuery({page: n});
    setLoading(true);
  }

  const handleReset= (e)=>{
    navigate("/portfolio");
    resultDispatch({
      type: "reset"
    });
    setLoading(true)
  }

  let listProjects;
  if (result !== null && result !== undefined && result.length > 0) listProjects = result.map((project) => (
      <Item data={project} key={project.id} />
    ));
  else if (result !== null && result !== undefined && result.length === 0 && !isSearch) listProjects = (
      <span className="info">
        Apologies, projects are not available now. Check back later.
      </span>
    );
  else if (result !== null && result !== undefined && result.length === 0 && isSearch) listProjects = (
    <span className="info">
      No matching result.
    </span>
  );
  else listProjects = (<span className="error">An error occured, Try again later.</span>);

  return (
    <MainDiv>
      <h1>Portfolio</h1>
      <p>
        Explore my projects to see how I blend creativity and technical
        expertise to deliver high-quality solutions that meet diverse needs.
      </p>
      <Search pageNum={pageNum} setLoading={setLoading} />
      <div>
        {loading ? (
          <img src={loadingImg} alt="Loading..." className="loadingGif" />
        ) : (
          listProjects
        )}
      </div>
      {pagination !== undefined && result !== null && result !== undefined && result.length > 0 && !isSearch && (
          <div className="pagination-btn-panel">
            {pagination.first !== undefined && (<button onClick={(e)=> handleNavigation(e, pagination.first)}>{`${pagination.first}`}</button>)}
            <button disabled={pagination.prev === undefined} onClick={(e)=> handleNavigation(e, pagination.prev)}>Previous</button>
            <button disabled={pagination.next === undefined} onClick={(e)=> handleNavigation(e, pagination.next)}>Next</button>
            {pagination.last !== undefined && (<button onClick={(e)=> handleNavigation(e, pagination.last)}>{`${pagination.last}`}</button>)}
          </div>
      )}
      {isSearch && (<button onClick={handleReset} className="button">View other project</button>)}
    </MainDiv>
  );
}

export default Portfolio;