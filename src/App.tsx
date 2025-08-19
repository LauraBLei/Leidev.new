import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./fonts.css";
import { Layout } from "./components/layout";

import { OpenProvider } from "./components/context";
import { HomePage } from "./home";
import { DataProvider } from "./context/common";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <OpenProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </OpenProvider>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
