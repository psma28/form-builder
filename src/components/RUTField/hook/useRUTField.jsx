import { useState } from "react";
import { RUTIndicators } from "../data/RUTIndicators";
import { getValue } from "../../../utils/RUTFormatter";
import { validateRUT } from "../../../utils/validators/RUTValidator";

export function useRUTField(fieldHandler, updateForm, attachForm) {
  const [rutValue, setRutValue] = useState("");
  const [indicator, setIndicator] = useState(RUTIndicators.waiting);

  const handleIndicator = (status) => {
    setIndicator(status);
  };
  const inputChangeHandler = (value) => {
    setRutValue(value);
  };
  const verificateRUT = () => {
    // TODO: API Connection to verify RUT
    if (validateRUT(getValue(rutValue))) {
      //const url = "http://localhost:4000/proxy";
      const url =
        "https://rrhh.iie.cl/public/web_rrhh/sources/personas.php?run=" +
        rutValue;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("respuesta server", data);
          let cluster = {rut: rutValue};
          if (data.length > 0) {
            const res = data[0];
            for (const [key, value] of Object.entries(res)) {
              //console.log(`${key}: ${value}`);
              console.log(`${key}: ${value}`);
              //updateForm(key, value)
              cluster = { ...cluster, [key]: value };
            }
            console.log("cluster", cluster);
          }
          attachForm(cluster);
          //const object = data[0];
          //console.log("respuesta server", object);
          //updateForm("nombres", object.nombres)
        });

      //updateForm("rut", rutValue);
      handleIndicator(RUTIndicators.verified);
      fieldHandler(true);
    } else {
      handleIndicator(RUTIndicators.failed);
      fieldHandler(false);
      updateForm("rut", "");
    }
  };

  return { inputChangeHandler, verificateRUT, indicator, rutValue };
}
