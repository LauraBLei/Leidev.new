import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./fonts.css";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/HomePage";
import { ThreeDPage } from "./pages/3D";
import { CameraProvider } from "./context/CameraContext";

function App() {
  return (
    <CameraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/3d" element={<ThreeDPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CameraProvider>
  );
}

export default App;
