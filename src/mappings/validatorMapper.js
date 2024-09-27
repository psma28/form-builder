import { letterInputValidator } from "../validators/letterInputValidator";
import { completionValidator } from "../validators/completionValidator";
import { numericInputValidator } from "../validators/numericInputValidator";
import { emailValidator } from "../validators/emailValidator";

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
      default:
        return;
    }
  });
  return mappedValidators;
}
