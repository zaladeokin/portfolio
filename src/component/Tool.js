import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs, faJs, faVuejs, faCss3Alt, faHtml5 } from "@fortawesome/free-brands-svg-icons";

import "../asset/style/Tool.css";

function Tool({ tools }) {
    const listTools= tools.map((tool)=>{
        let icon;
        switch (tool.toLowerCase()) {
            case "react":{ 
                icon= faReact;
                break;
            }case "node":{ 
                icon= faNodeJs;
                break;
            }case "javascript":{ 
                icon= faJs;
                break;
            }case "vue":{ 
                icon= faVuejs;
                break;
            }case "css":{ 
                icon= faCss3Alt;
                break;
            }case "html":{ 
                icon= faHtml5;
                break;
            }default:{
                icon= faCircle;
                break;
            }
        }
        return(
            <span key={tool}><FontAwesomeIcon icon={icon} className="tech-icon" />{tool}</span>
        );
    });
    return (
      <div className="technologies">
        {listTools}
      </div>
    );
}

export default Tool;
