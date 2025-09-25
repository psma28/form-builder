import { letterInputValidator } from "../validators/letterInputValidator";
import { letterSymbolInputValidator } from "../validators/letterSymbolInputValidator";
import { completionValidator } from "../validators/completionValidator";
import { minTelephoneLenghtValidator, numericInputValidator } from "../validators/numericInputValidator";
import { emailValidator } from "../validators/emailValidator";
import { mayorEdadValidator, mayor21Validator} from "../validators/mayorEdadValidator";

export function validatorMapper(validators) {
  if (!validators) return [];
  const mappedValidators = validators.map((validator) => {
    switch (validator) {
      case "letter":
        return letterInputValidator;
      case "letter-symbol":
        return letterSymbolInputValidator;
      case "completion":
        return completionValidator;
      case "number":
        return numericInputValidator;
      case "email":
        return emailValidator;
      case "mayor-edad":
        return mayorEdadValidator;
      case "mayor-21":
        return mayor21Validator; 
      case "min-telephone":
        return minTelephoneLenghtValidator; 
      default:
        return;
    }
  });
  return mappedValidators;
}
