import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { MainDiv, Item } from "../component/index";
import { useGithubAPI } from "../hooks/index";
import loadingImg from "../asset/img/loading.gif";

import "../asset/style/Portfolio.css";

function Portfolio() {
  const [pageNum, setPageNum] = useState(1);
  const { result, pagination, loading } = useGithubAPI("list", null, pageNum);
  const [pageQuery, setPageQuery]= useSearchParams();

  useEffect(()=>{
    let pn= pageQuery.get('page') || 1;
    setPageNum(pn);
  }, [pageQuery]);

  const handleNavigation= (e, n)=>{
    e.preventDefault();
    setPageQuery({page: n})
  }

  let listProjects;
  if (result !== null && result !== undefined && result.length > 0) listProjects = result.map((project) => (
      <Item data={project} key={project.id} />
    ));
  else if (result !== null && result !== undefined && result.length === 0) listProjects = (
      <span className="info">
        Apologies, projects are not available now. Check back later.
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
      <div>
        {loading ? (
          <img src={loadingImg} alt="Loading..." className="loadingGif" />
        ) : (
          listProjects
        )}
      </div>
      {pagination !== undefined &&
        result !== null &&
        result !== undefined &&
        result.length > 0 && (
          <div className="pagination-btn-panel">
            {pagination.first !== undefined && (<button onClick={(e)=> handleNavigation(e, pagination.first)}>{`${pagination.first}`}</button>)}
            <button disabled={pagination.prev === undefined} onClick={(e)=> handleNavigation(e, pagination.prev)}>Previous</button>
            <button disabled={pagination.next === undefined} onClick={(e)=> handleNavigation(e, pagination.next)}>Next</button>
            {pagination.last !== undefined && (<button onClick={(e)=> handleNavigation(e, pagination.last)}>{`${pagination.last}`}</button>)}
          </div>
        )}
    </MainDiv>
  );
}

export default Portfolio;
