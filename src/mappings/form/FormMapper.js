export function formMapper(stagedForm) {
  const formData = new FormData();
  for (const element of stagedForm) {
    if (element.key && element.value) {
      formData.append(element.key, element.value);
    }
  }

  return formData;
}
