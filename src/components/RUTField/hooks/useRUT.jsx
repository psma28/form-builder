import { useState } from "react";
import { RUTIndicators } from "../data/RUTIndicators";
import { validateRUT } from "../../../validators/RUTValidator";
import { getValue, RUTFormatter } from "../../../utils/RUTFormatter";
import { RUTVerification } from "../../../services/api/RUTVerification";
export function useRUT(
  setLoading,
  fieldHandler,
  updateComponent,
  getComponent
) {
  const [rutValue, setRutValue] = useState("");
  const [indicator, setIndicator] = useState(RUTIndicators.waiting);

  const handleIndicator = (status) => {
    setIndicator(status);
  };
  const inputChangeHandler = (value) => {
    setRutValue(getValue(value));
  };

  const verificateRUT = async () => {
    if (!validateRUT(getValue(rutValue))) {
      handleIndicator(RUTIndicators.failed);
      fieldHandler(false);
      return;
    }
    setLoading(true);
    const data = await RUTVerification(RUTFormatter(rutValue));
    const entries = data[0] ?? [];
    for (const [key, value] of Object.entries(entries)) {
      if (!getComponent(key)) continue;
      if (value) updateComponent(key, { value: value });
    }
    setLoading(false);
    updateComponent("rut", { value: rutValue });
    handleIndicator(RUTIndicators.verified);
    fieldHandler(true);
  };

  return { inputChangeHandler, verificateRUT, indicator, rutValue };
}
