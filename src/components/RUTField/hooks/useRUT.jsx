import { useState } from "react";
import { RUTIndicators } from "../data/RUTIndicators";
import { validateRUT } from "../../../validators/RUTValidator";
import { getValue } from "../../../utils/RUTFormatter";
export function useRUT(setLoading, fieldHandler, updateComponent) {
  const [rutValue, setRutValue] = useState("");
  const [indicator, setIndicator] = useState(RUTIndicators.waiting);

  const handleIndicator = (status) => {
    setIndicator(status);
  };
  const inputChangeHandler = (value) => {
    setRutValue(value);
  };

  const verificateRUT = () => {
    if (validateRUT(getValue(rutValue))) {
      /*const url =
        "https://rrhh.iie.cl/public/web_rrhh/sources/personas.php?run=13.962.983-3" 
       // + rutValue;
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("respuesta server", data);
          console.log(data[0].nombres);
          updateComponent("nacionalidad", {
            value: "tarapaca",
          });
          updateComponent("comunas", {
            value: "iquique",
          });
          setLoading(false);
        });
      */
      //updateForm("rut", rutValue);
      handleIndicator(RUTIndicators.verified);
      fieldHandler(true);
    } else {
      handleIndicator(RUTIndicators.failed);
      fieldHandler(false);
      //updateForm("rut", "");
    }
  };

  return { inputChangeHandler, verificateRUT, indicator, rutValue };
}
