import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Form } from "./pages/Form";
import { FormSchemaProvider } from "./context/FormSchemaContext";
import { LoadingProvider } from "./context/LoadingContext";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/public/web_rrhh/dev_test/:formId"
          element={
            <LoadingProvider>
              <ModalProvider>
                <FormSchemaProvider>
                  <Form />
                </FormSchemaProvider>
              </ModalProvider>
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
