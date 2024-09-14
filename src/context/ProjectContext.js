import { createContext, useContext, useReducer } from "react";

let init = {
  result: { resultValue: undefined, resultDispatch: undefined },
};

const ProjectContext= createContext(init);

export function ProjectDataProvider({ children }){
    const [result, dispatchResult]= useReducer(resultReducer, undefined);

    const result_obj={
        resultValue: result,
        resultDispatch: dispatchResult
    }
    
    return(
        <ProjectContext.Provider value={result_obj}>
            {children}
        </ProjectContext.Provider>
    );
}

export function useProjectContext(){
    return useContext(ProjectContext);
}

//reducer function
function resultReducer(result, action){
    switch (action.type) {
      case "update": {
        return action.value;
      }

      case "reset": {
        return init;
      }

      default:{
        throw Error("Invalid operation");
      }
    }
}