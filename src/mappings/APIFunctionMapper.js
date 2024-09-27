import { getComunas, getRegiones } from "../services/api/regionSeeder";
import { getColegios } from "../services/api/schoolSeeder";
import { getSubjects } from "../services/api/subjectSeeder";
import { getUniversidades } from "../services/api/universitySeeder";
import { getYears } from "../services/api/yearSeeder";
import { getRBDComuna } from "../services/api/RBDProvider";
import { getRBDEstablecimiento } from "../services/api/RBDProvider";
import { getListaSexos } from "../services/seeders/lista-sexos";

const APIFunctionsMap = {
  "lista-sexos": { function: getListaSexos, args: 0},
  "get-escuelas": { function: getColegios, args: 0 },
  "get-universidades": { function: getUniversidades, args: 0 },
  "get-regiones": { function: getRegiones, args: 0 },
  "get-comunas": { function: getComunas, args: 1 },
  "get-anios": { function: getYears, args: 0 },
  "get-asignaturas": { function: getSubjects, args: 0 },
  "rbd-comuna": { function: getRBDComuna, args: 1 },
  "rbd-establecimiento": { function: getRBDEstablecimiento, args: 1 },
}

function searchFunction(functionName) {
  const foundFunction = APIFunctionsMap[functionName];
  return foundFunction;
}

export async function functionExecutor(functionName, args, setLoading) {
  setLoading(true);
  const functionInfo = searchFunction(functionName);
  if (functionInfo.args === 0)
    return functionInfo.function().then((res) => {
      setLoading(false);
      return res;
    });
    return functionInfo.function(args).then((res) => {
    setLoading(false);
    return res;
  });
}
