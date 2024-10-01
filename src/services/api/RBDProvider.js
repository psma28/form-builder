const urlRBD = "https://rrhh.iie.cl/public/web_rrhh/sources/rbd.php?rbd=";
let RBDObject = {};

export async function getEstablecimientoRBD(number) {
  const res = await fetch(urlRBD + number);
  const data = await res.json();
  let newRBD = { establecimiento: "", comuna: "" };
  if (data.length > 0) {
    newRBD = {
      establecimiento: data[0]["nombre_establecimiento"],
      comuna: data[0]["comuna"],
    };
  }
  RBDObject = { ...newRBD };
  return RBDObject.establecimiento;
}

export async function getComunaRBD() {
  return RBDObject.comuna;
}
