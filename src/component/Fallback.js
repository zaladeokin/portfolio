import { Link } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import MainDiv from "./MainDiv";

function Fallback() {
    const { resetBoundary }= useErrorBoundary();
    
    return (
        <MainDiv>
            <h1>An error occurrred</h1>
            <p>Something went wrong</p>
            <Link to="/">
                <button onClick={resetBoundary} className="button">Back To Home</button>
            </Link>
        </MainDiv>
    );
}

export default Fallback;