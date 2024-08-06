import { MainDiv } from "../component/index";
import '../asset/style/Homepage.css'
import { useEffect, useRef, useState } from "react";

function Homepage() {
    const node= useRef();
    const [textArrayIndex, setTextArrayIndex]= useState(0);

    useEffect(()=>{
        let timeoutId;
        let intervalId;
        const element= node.current
        const textArray = [
          "Frontend Developer.",
          "Backend Developer.",
          "Fullstack Developer.",
        ];
        const nextText= ()=>{
            if(textArrayIndex === textArray.length - 1) setTextArrayIndex(0);
            else setTextArrayIndex(n=> n + 1);
        }
        let wordArray= textArray[textArrayIndex].split('');
        element.innerText = "";
        wordArray.forEach((word, i)=>{
            timeoutId= setTimeout(() => element.innerText += word, 95 * i);
        });
        intervalId = setInterval(nextText, 5000);

        return ()=>{
            clearInterval(intervalId);
            for (let i = timeoutId; i > 0; i--) {
              clearTimeout(i);
            }
        }
    }, [textArrayIndex]);
    

    const FIRSTNAME_WITH_INITIALS = process.env.REACT_APP_FIRSTNAME_WITH_INITIALS || "ZACCHAEUS A.S.";
  return (
    <MainDiv>
      <div className="typewriter-panel">
        <div className="content content-header">{FIRSTNAME_WITH_INITIALS}</div>
        <div className="content">I'm a&nbsp;<span className="typewriter" ref={node}></span></div>
      </div>
    </MainDiv>
  );
}

export default Homepage;
