export function formMapper(stagedForm) {
  const formData = new FormData();
  for (const { key, value } of stagedForm) {
    if (!key || !value) continue;
    if (value instanceof File) {
      formData.append(key, value);
      continue;
    }

    if (Array.isArray(value) || typeof value === "object") {
      formData.append(key, JSON.stringify(value));
      continue;
    }
    formData.append(key, value);
  }

  return formData;
}
