import { getComunas, getRegiones } from "../../services/api/regionSeeder";
import { getColegios } from "../../services/api/schoolSeeder";
import { getUniversidades } from "../../services/api/universitySeeder";
import { getYears } from "../../services/api/yearSeeder";

const APIFunctionsMap = {
  "get-escuelas": { function: getColegios, args: 0 },
  "get-universidades": { function: getUniversidades, args: 0 },
  "get-regiones": { function: getRegiones, args: 0 },
  "get-comunas": { function: getComunas, args: 1 },
  "get-anios": { function: getYears, args: 0 },
};

function searchFunction(functionName) {
  const foundFunction = APIFunctionsMap[functionName];
  return foundFunction;
}

export async function functionExecutor(functionName, args) {
  const functionInfo = searchFunction(functionName);
  if (functionInfo.args === 0)
    return functionInfo.function().then((res) => {
      return res;
    });
  return functionInfo.function(args).then((res) => {
    return res;
  });
}
