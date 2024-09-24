import { useState } from "react";
import { RUTIndicators } from "../data/RUTIndicators";
import { getValue } from "../../../utils/RUTFormatter";
import { validateRUT } from "../../../utils/validators/RUTValidator";

export function useRUTField(fieldHandler) {
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
      handleIndicator(RUTIndicators.verified);
      fieldHandler(true);
    } else {
      handleIndicator(RUTIndicators.failed);
      fieldHandler(false);
    }
  };

  return { inputChangeHandler, verificateRUT, indicator, rutValue };
}
