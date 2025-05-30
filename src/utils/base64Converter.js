export function getBase64(file) {
  return new Promise((resolve) => {
    //let fileInfo;
    let baseURL = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
}
