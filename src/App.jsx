import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Form } from "./pages/Form";
import { FormSchemaProvider } from "./context/FormSchemaContext";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/form/:formId"
          element={
            <LoadingProvider>
              <FormSchemaProvider>
                <Form />
              </FormSchemaProvider>
            </LoadingProvider>
          }
        />
        <Route
          path="/*"
          element={<NotFoundPage message={"Página no encontrada"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
