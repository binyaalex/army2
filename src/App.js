import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebPage from "./components/web/WebPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/web">
            <Route path="page/*" element={<WebPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
