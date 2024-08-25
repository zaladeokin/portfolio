import { Link } from "react-router-dom";
import { MainDiv } from "../component";

function NotFound() {
    return(
        <MainDiv>
            <h1>ERR: 404</h1>
            <strong style={{ display: 'block', marginTop: '40vh', textAlign: 'center', color: 'red', fontSize: '2em', fontWeight: '700' }}>
                Page not found.
            </strong>
            <div style={{ width: 'fit-content', margin: '5vh auto' }}>
                <Link to='/'><button>Back To Home</button></Link>
            </div>
        </MainDiv>
    );
}

export default NotFound;