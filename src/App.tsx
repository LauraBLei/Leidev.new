import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./fonts.css";
import { Layout } from "./components/layout";
import { IntroPage } from "./Sections/intro";

import { OpenProvider } from "./components/context";
import { HomePage } from "./home";

function App() {
  return (
    <BrowserRouter>
      <OpenProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IntroPage />} />
            <Route path="/Home" element={<HomePage />} />
          </Route>
        </Routes>
      </OpenProvider>
    </BrowserRouter>
  );
}

export default App;
