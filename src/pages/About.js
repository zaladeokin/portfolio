import { useEffect, useState } from "react";
import { MainDiv } from "../component";

function About(){
    const [ data, setData ]= useState();
    useEffect(()=>{
        fetch('http://gthub.com').then((res) =>{
            setData(res);
        });
    }, []);


    return(
        <MainDiv>
            <h1>About</h1>
            {data.name}
        </MainDiv>
    );
}
export default About;