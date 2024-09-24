import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { FormRenderer } from "./pages/FormRenderer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form/:formId" element={<FormRenderer />} />
        <Route
          path="/*"
          element={<NotFoundPage message={"Página no encontrada"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
