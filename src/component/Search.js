import { useEffect, useRef, useState } from 'react';
import '../asset/style/Search.css'
import { useSearchGithub } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';

function Search({pageNum, setLoading}){    
    const [keyword, setKeyword]= useState("");
    const [pageQuery, setPageQuery] = useSearchParams();
    const navigate= useNavigate();
    let isSearch = pageQuery.get("search") || false;
    const res = useSearchGithub(keyword, isSearch, pageNum);
    const { resultDispatch } = useProjectContext();
    const inputNode= useRef();

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
      setLoading(n=> !n);
    }, [resultDispatch, res, isSearch, setLoading]);

    const handleSearch= (e)=>{
        e.preventDefault();
        if (keyword === inputNode.current.value) return;
        setLoading(true);
        setPageQuery({ search: true });
        setKeyword(inputNode.current.value);
    }

    return(
        <div className="search">
            <input type="text" ref={inputNode} />
            <button onClick={handleSearch} className="button">Search</button>
        </div>
    );
}

export default Search;