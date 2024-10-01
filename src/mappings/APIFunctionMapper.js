import { getComunas, getRegiones } from "../services/api/regionProvider";
import { getColegios } from "../services/api/schoolSeeder";
import { getUniversidades } from "../services/api/universitySeeder";
import { getYears } from "../services/api/yearSeeder";
import {
  getComunaRBD,
  getEstablecimientoRBD,
} from "../services/api/RBDProvider";
import { getListaSexos } from "../services/seeders/lista-sexos";
import { getListaEstadosCiviles } from "../services/seeders/lista-estado-civil";
import { getListaIdentidadGenero } from "../services/seeders/lista-identidad-genero";
import { getListaSituacionDiscapacidad } from "../services/seeders/lista-discapacidad";
import { getListaPertenenciaPueblos } from "../services/seeders/lista-pertenencia-pueblos";
import { getBancos } from "../services/seeders/lista-bancos";
import { getTiposCuenta } from "../services/seeders/lista-tipo-cuenta";
import { getInstituciones } from "../services/seeders/lista-instituciones";
import { getAsignaturasEDD24 } from "../services/seeders/lista-asignaturas";
import { getCertificadosIngles } from "../services/seeders/lista-certificados-ingles";
import { getAsignaturasTecnicoEDD24 } from "../services/seeders/lista-asignaturas-tecnico";
import { getEspecialidades } from "../services/seeders/lista-especialidades";
import { getCargoCentrosCorreccion } from "../services/seeders/lista-cargo-centro-correccion";
import { getAniosTrabajados } from "../services/seeders/lista-anios-trabakados";

const APIFunctionsMap = {
  "lista-sexos": { function: getListaSexos, args: 0 },
  "lista-identidad-genero": { function: getListaIdentidadGenero, args: 0 },
  "lista-estados-civiles": { function: getListaEstadosCiviles, args: 0 },
  "lista-discapacidad": { function: getListaSituacionDiscapacidad, args: 0 },
  "lista-pertenencia-pueblos": {
    function: getListaPertenenciaPueblos,
    args: 0,
  },
  "get-regiones": { function: getRegiones, args: 0 },
  "get-comunas": { function: getComunas, args: 1 },
  "get-bancos": { function: getBancos, args: 0 },
  "get-tipos-cuenta": { function: getTiposCuenta, args: 0 },
  "get-instituciones": { function: getInstituciones, args: 0 },
  "get-asignaturas": { function: getAsignaturasEDD24, args: 0 },
  "get-especialidades": { function: getEspecialidades, args: 0 },
  "get-asignaturas-tecnico": { function: getAsignaturasTecnicoEDD24, args: 0 },
  "get-anios": { function: getYears, args: 0 },
  "get-certificados-ingles": { function: getCertificadosIngles, args: 0 },
  "get-cargos-centros-correccion": {
    function: getCargoCentrosCorreccion,
    args: 0,
  },
  "get-anios-trabajados": { function: getAniosTrabajados, args: 0 },

  "get-escuelas": { function: getColegios, args: 0 },
  "get-universidades": { function: getUniversidades, args: 0 },

  "rbd-comuna": { function: getComunaRBD, args: 1 },
  "rbd-establecimiento": { function: getEstablecimientoRBD, args: 1 },
};

function searchFunction(functionName) {
  const foundFunction = APIFunctionsMap[functionName];
  return foundFunction;
}

export async function functionExecutor(functionName, args, setLoading) {
  setLoading(true);
  const functionInfo = searchFunction(functionName);
  if (functionInfo.args === 0) {
    return functionInfo.function().then((res) => {
      setLoading(false);
      return res;
    });
  }
  return functionInfo.function(args).then((res) => {
    setLoading(false);
    return res;
  });
}
