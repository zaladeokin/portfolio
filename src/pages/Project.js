import { Link, useLocation, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import parse from "html-react-parser"

import { MainDiv } from "../component";
import { useGithubAPI } from "../hooks/index";

import loadingImg from "../asset/img/loading.gif";

import  "../asset/style/project.css"
import { useEffect, useRef, useState } from "react";

function Project() {
    const {repo_name}= useParams();
    const hash= useLocation().hash;
    const node= useRef(null);
    const resString= useGithubAPI("single", repo_name);
    const [res, setRes]= useState(undefined);
    let content, result, loading, status;

    //Update result
    useEffect(()=>{
      if(resString === undefined) return;
      let resObj = JSON.parse(resString);
      setRes(resObj);
    },[resString])

    if(res !== undefined){
      result = res.result !== undefined ? res.result : undefined;
      loading= res.loading !== undefined ? res.loading : true;
      status = res.status !== undefined ? res.status : 500;
    }else{
      result= undefined;
      loading= true;
      status= 500
    }

    
    //scroll into view effect.
    useEffect(()=>{
      let id= typeof hash === "string" ? hash.replace('#', '#user-content-') : '';
      if (id.length > 0 && node.current) {
        let view= node.current.querySelector(id);
        view.scrollIntoView({ behavior: "smooth" });
      }
    });

    if(result && status=== 200){
      let opt = {
        replace: (domNode) => {
          if (domNode.name === "img"){
            let src = `https://raw.githubusercontent.com/${process.env.REACT_APP_GH_USERNAME}/${repo_name}/master/${domNode.attribs.src}`;
            let alt = domNode.attribs.alt || "image";
            let style = { maxWidth: "90%", margin: "2% auto"}
            return <img src={src} alt={alt} style={style} />;
          }
        },
      };
      content= (<div className="project" ref={node}>{parse(result, opt)}</div>);
    }else{ content= (<span className="error">Content not available.</span>);}
    
      
    return (
      <MainDiv>
        <h1>
          <Link to="/portfolio">Portfolio</Link>&nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
          &nbsp;{`${repo_name}`}
        </h1>
        {loading ? (
          <img src={loadingImg} alt="Loading..." className="loadingGif" />
        ) : (
          content
        )}
      </MainDiv>
    );
}

export default Project;