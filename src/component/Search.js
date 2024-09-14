import { useEffect, useRef, useState } from 'react';
import '../asset/style/Search.css'
import { useSearchGithub } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';

function Search({pageNum, setLoading}){    
    const [keyword, setKeyword]= useState("");
    const filter= useRef(false);
    const [pageQuery, setPageQuery] = useSearchParams();
    const navigate= useNavigate();
    let isSearch = pageQuery.get("search") || false;
    const res = useSearchGithub(keyword, isSearch, filter.current);
    const { resultDispatch } = useProjectContext();
    const inputNode= useRef();
    const filterNode = useRef();    

    useEffect(()=>{
        if (keyword === "" && pageQuery.get("search")) navigate("/portfolio");
    });

    useEffect(() => {
      let JSONRes = JSON.parse(res);
      if(!isSearch) return
      resultDispatch({
        type: "update",
        value: JSONRes,
      });
      setLoading(false);
    }, [resultDispatch, res, isSearch, setLoading]);

    const handleSearch= (e)=>{
        e.preventDefault();
        if (keyword === inputNode.current.value && filter.current === filterNode.current.checked) return;
        filter.current = filterNode.current.checked;
        setLoading(true);
        setPageQuery({ search: true });
        setKeyword(inputNode.current.value);
    }

    return(
        <div className="search">
            <input type="text" ref={inputNode} />
            <div className='filter'><input type='checkbox' ref={filterNode} /><span>Search through  project content</span></div>
            <button onClick={handleSearch} className="button">Search</button>
        </div>
    );
}

export default Search;