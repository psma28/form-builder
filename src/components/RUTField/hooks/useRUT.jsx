import { useState } from "react";
import { RUTIndicators } from "../data/RUTIndicators";
import { validateRUT } from "../../../validators/RUTValidator";
import { getValue, RUTFormatter } from "../../../utils/RUTFormatter";
export function useRUT(setLoading, fieldHandler, updateComponent) {
  const [rutValue, setRutValue] = useState("");
  const [indicator, setIndicator] = useState(RUTIndicators.waiting);

  const handleIndicator = (status) => {
    setIndicator(status);
  };
  const inputChangeHandler = (value) => {
    setRutValue(getValue(value));
  };

  const verificateRUT = () => {
    if (validateRUT(getValue(rutValue))) {
      const url =
      "https://rrhh.iie.cl/public/web_rrhh/sources/personas.php?run=" +
      RUTFormatter(rutValue);
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("respuesta server", data);

          if (data.length > 0) {
            const res = data[0];
            for (const [key, value] of Object.entries(res)) {
              console.log(`${key}: ${value}`);
              updateComponent(key, { value: value });
            }
          }
          setLoading(false);
        });

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
