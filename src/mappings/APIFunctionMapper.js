import { getRegiones } from "../services/seeders/lista-regiones";
import { getComunas } from "../services/seeders/lista-comunas";
import { getAnios } from "../services/seeders/lista-anios";
import { getListaSexos } from "../services/seeders/lista-sexos";
import { getListaEstadosCiviles } from "../services/seeders/lista-estado-civil";
import { getListaIdentidadGenero } from "../services/seeders/lista-identidad-genero";
import { getListaSituacionDiscapacidad } from "../services/seeders/lista-discapacidad";
import { getListaPertenenciaPueblos } from "../services/seeders/lista-pertenencia-pueblos";
import { getBancos } from "../services/seeders/lista-bancos";
import { getTiposCuenta } from "../services/seeders/lista-tipo-cuenta";
import { getInstituciones } from "../services/seeders/lista-instituciones";
import { getAsignaturasEDD } from "../services/seeders/lista-asignaturas";
import { getCertificadosIngles } from "../services/seeders/lista-certificados-ingles";
import { getAsignaturasTecnicoEDD24 } from "../services/seeders/lista-asignaturas-tecnico";
import { getEspecialidades } from "../services/seeders/lista-especialidades";
import { getCargoCentrosCorreccion } from "../services/seeders/lista-cargo-centro-correccion";
import { getAniosTrabajados } from "../services/seeders/lista-anios-trabakados";
import {
  getProfesiones,
  getProfesionesEDD,
} from "../services/seeders/lista-profesiones";
import { getNacionalidades } from "../services/seeders/lista-nacionalidades";
import {
  getNivelEstudios,
  getNivelEstudiosEDDCorrector,
} from "../services/seeders/lista-nivel-estudios";
import { getListaCargosEndfid2024 } from "../services/seeders/lista-cargos-endfid2024";
import {
  getComunaRBD,
  getEstablecimientoRBD,
} from "../services/api/RBDProvider";
import {
  setAsignaturaEDD24InstitucionEvaluadora,
  setEvidenciaEDD24InstitucionEvaluadora,
} from "../services/misc/edd24-institucion-evaluadora";
import { getSectorEconomicoEDD } from "../services/seeders/lista-sector-economico";
import { getCentrosCorreccionPrevios } from "../services/seeders/lista-centros-correccion-previos";
import { getAniosCorreccionPortafolios } from "../services/seeders/lista-anios-correccion-portafolios";

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
  "get-profesiones": { function: getProfesiones, args: 0 },
  "get-profesiones-edd": { function: getProfesionesEDD, args: 0 },
  "get-comunas": { function: getComunas, args: 1 },
  "get-bancos": { function: getBancos, args: 0 },
  "get-tipos-cuenta": { function: getTiposCuenta, args: 1 },
  "get-instituciones": { function: getInstituciones, args: 0 },
  "lista-nacionalidades": { function: getNacionalidades, args: 0 },
  "lista-nivel-estudios": { function: getNivelEstudios, args: 0 },
  "lista-nivel-estudios-edd-corrector": {
    function: getNivelEstudiosEDDCorrector,
    args: 0,
  },
  "get-asignaturas-edd": { function: getAsignaturasEDD, args: 0 },
  "get-sectores-economicos-edd": { function: getSectorEconomicoEDD, args: 0 },
  "get-especialidades": { function: getEspecialidades, args: 0 },
  "get-asignaturas-tecnico": { function: getAsignaturasTecnicoEDD24, args: 0 },
  "get-anios": { function: getAnios, args: 0 },
  "get-certificados-ingles": { function: getCertificadosIngles, args: 0 },
  "get-cargos-centros-correccion": {
    function: getCargoCentrosCorreccion,
    args: 0,
  },
  "get-anios-trabajados": { function: getAniosTrabajados, args: 0 },
  "get-anios-correccion-portafolios": {
    function: getAniosCorreccionPortafolios,
    args: 0,
  },
  "set-asignatura-edd2024-institucion-evaluadora": {
    function: setAsignaturaEDD24InstitucionEvaluadora,
    args: 1,
  },
  "set-evidencia-edd2024-institucion-evaluadora": {
    function: setEvidenciaEDD24InstitucionEvaluadora,
    args: 1,
  },
  "get-centros-correccion-previos": {
    function: getCentrosCorreccionPrevios,
    args: 0,
  },
  "rbd-comuna": { function: getComunaRBD, args: 1 },
  "rbd-establecimiento": { function: getEstablecimientoRBD, args: 1 },
  "cargos-endfid-2024": { function: getListaCargosEndfid2024, args: 0 },
};

function searchFunction(functionName) {
  const foundFunction = APIFunctionsMap[functionName];
  return foundFunction;
}

export async function functionExecutor(functionName, args, setLoading) {
  setLoading(true);
  const functionInfo = searchFunction(functionName);
  if (functionInfo.args === 0) {
    const res = await functionInfo.function();
    setLoading(false);
    return res;
  }
  const res = await functionInfo.function(args);
  setLoading(false);
  return res;
  // return functionInfo.function(args).then((res) => {
  //   setLoading(false);
  //   return res;
  // });
}
