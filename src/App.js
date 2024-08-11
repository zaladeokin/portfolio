import { Route, Routes } from "react-router-dom";
import { NavWidget } from "./component";
import { Homepage, Portfolio } from "./pages";

function App() {
  return (
    <>
      <NavWidget />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
