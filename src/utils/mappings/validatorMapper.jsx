import { letterInputValidator } from '../validators/letterInputValidator'
import { numericInputValidator } from '../validators/numericInputValidator'
import { completionValidator } from '../validators/completionValidator'
import { emailValidator } from '../validators/emailValidator'

export function validatorMapper(validators){
    if (validators === undefined || validators === null) {
      return [];
    }
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
  };