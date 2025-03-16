import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import { Layout } from "./components/layout";
import { IntroPage } from "./Pages/intro";
import { NavPage } from "./Pages/nav";
import { AboutPage } from "./Pages/about";
import { ProjectsPage } from "./Pages/projects";
import { OpenProvider } from "./components/context";

function App() {
  return (
    <BrowserRouter>
      <OpenProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IntroPage />} />
            <Route path="/Home" element={<NavPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
      </OpenProvider>
    </BrowserRouter>
  );
}

export default App;
