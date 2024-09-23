import { getColegios } from "../../services/api/schoolSeeder";
import {
  getUbicacionUniversidad,
  getUniversidades,
} from "../../services/api/universitySeeder";

const APIFunctionsMap = {
  "get-escuelas": { function: getColegios, args: 0 },
  "get-universidades": { function: getUniversidades, args: 0 },
  "get-ubicacion-universidad": { function: getUbicacionUniversidad, args: 1 },
};

function searchFunction(functionName) {
  const foundFunction = APIFunctionsMap[functionName];
  return foundFunction;
}

export function functionExecutor(functionName, args) {
  const functionInfo = searchFunction(functionName);

  if (functionInfo.args === 0) {
    return functionInfo.function().then((res) => {
      return res;
    });
  }

  return functionInfo.function(args).then((res) => {
    return res;
  });
}
