import { useEffect, useState } from "react";

function useGithubAPI(request_type, page= 1, limit=2) {
    const [loading, setLoading] = useState(true);
    const [result, setResult]= useState(undefined);
    
  useEffect(()=>{
    let url; let res_obj={};
    (async ()=>{
        try {
            if (process.env.REACT_APP_GH_USERNAME === undefined || process.env.REACT_APP_GH_USERNAME === "")throw new Error("invalid username");
            //Compose path for different Github endpoint
            if (request_type === "list") url = `https://api.github.com/users/${process.env.REACT_APP_GH_USERNAME}/repos?per_page=${limit}&page=${page}&sort=created&direction=desc`;
            // else url= "/";
            let res= await fetch(url);
            // Extract pagination from response header 'link' if list of repos is returned
            if(request_type === "list"){
                let pagination_link = await res.headers.get("link").replaceAll(" ", "").replaceAll("&sort=created&direction=desc>", "").split(",");
                let pagination_obj = {};
                pagination_link.forEach((nav) => {
                  let nav_arr = nav.split(";");
                  let page_num = nav_arr[0].split("&page=")[1];
                  let nav_prop = nav_arr[1].replace("rel=", "").replaceAll('"', "");
                  pagination_obj[nav_prop] = page_num;
                });
                res_obj.pagination = pagination_obj;
            }
            //Convert response to JSON
            res= await res.json();
            //handle repo without description & topic
            if (request_type === "list") res = res.map((project) => {
                if(project.description === null) project.description= "Narration is not avaible for this project, it might be under process or outdated.";
                if(project.topics.length === 0) project.topics= ['unavailable'];
                return project
            });
            res_obj.result= res;
            setResult(res_obj);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setResult(undefined);
        }
    })();
  }, [request_type, limit, page]);
  
  return {...result, loading};
}

export default useGithubAPI;