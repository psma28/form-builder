import { letterInputValidator } from "../validators/letterInputValidator";
import { completionValidator } from "../validators/completionValidator";
import { numericInputValidator } from "../validators/numericInputValidator";
import { emailValidator } from "../validators/emailValidator";
import { mayorEdadValidator } from "../validators/mayorEdadValidator";

export function validatorMapper(validators) {
  if (!validators) return [];
  const mappedValidators = validators.map((validator) => {
    switch (validator) {
      case "letter":
        return letterInputValidator;
      case "completion":
        return completionValidator;
      case "number":
        return numericInputValidator;
      case "email":
        return emailValidator;
      case "mayor-edad":
        return mayorEdadValidator;  
      default:
        return;
    }
  });
  return mappedValidators;
}
