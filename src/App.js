import { Route, Routes } from "react-router-dom";
import { NavWidget } from "./component";
import { Homepage, Portfolio, Project } from "./pages";

function App() {
  return (
    <>
      <NavWidget />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:repo_name" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
