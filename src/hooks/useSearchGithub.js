import { useEffect, useState } from "react";

function useSearchGithub(keyword, isSearch) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    if (!isSearch) return; // Prevent hook for making request, given chance to useGithubAPI() hook
    let url, res;
    let res_obj = {};

    if (keyword === undefined || keyword === "") return;

    (async () => {
      try {
        if(process.env.REACT_APP_GH_USERNAME === undefined || process.env.REACT_APP_GH_USERNAME === "") throw new Error("Invalid username");

        url= "https://api.github.com/search/repositories?q=" + encodeURIComponent(keyword + " in:name,description,readme user:" +process.env.REACT_APP_GH_USERNAME);
        res = await fetch(url);
        //set request status
        res_obj.status = res.status;

        //Convert response to JSON
        res = await res.json();
        

        //handle repo without description & topic
        res = res.items.map((project) => {
          if (project.description === null)
            project.description =
              "Description is not available for this project, project might be under process or outdated.";
          if (project.topics.length === 0) project.topics = ["unavailable"];
          return project;
        });

        res_obj.result = res;
        setResult(res_obj);
      } catch (err) {
        console.log(err);
        setResult(undefined);
      }
      setLoading(false);
    })();
  }, [keyword, isSearch]);
  
  return JSON.stringify({ ...result, loading });
}

export default useSearchGithub;