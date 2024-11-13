import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Form } from "./pages/Form";
import { FormSchemaProvider } from "./context/FormSchemaContext";
import { LoadingProvider } from "./context/LoadingContext";
import { ModalProvider } from "./context/ModalContext";
import { FieldAccessProvider } from "./context/FieldAccessContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/front/form/:formId"
          element={
            <LoadingProvider>
              <FieldAccessProvider>
                <ModalProvider>
                  <FormSchemaProvider>
                    <Form />
                  </FormSchemaProvider>
                </ModalProvider>
              </FieldAccessProvider>
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
