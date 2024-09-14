import { Route, Routes } from "react-router-dom";
import { NavWidget, Fallback } from "./component";
import { About, Homepage, NotFound, Portfolio, Project } from "./pages";
import { ErrorBoundary } from "react-error-boundary";
import { ProjectDataProvider } from "./context/ProjectContext";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <NavWidget />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<ProjectDataProvider><Portfolio /></ProjectDataProvider>} />
        <Route path="/portfolio/:repo_name" element={<ProjectDataProvider><Project /></ProjectDataProvider>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
