import { useState } from "react";

export function useErrors() {
  const [errors, setErrors] = useState([]);
  return { errors, setErrors };
}
