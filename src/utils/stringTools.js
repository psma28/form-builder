export function toSnakeCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .toLowerCase();
}

export function toNormalText(string) {
  return string
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
}

export function convertToNumber(string) {
  if (isNaN(+string)) {
    return string;
  }
  return +string;
}

export function isProcessableComponent(componentType){
  const unprocessableComponents = ['alert', 'blank', 'form-structure', undefined, null, ''];
  return !unprocessableComponents.includes(componentType);
}