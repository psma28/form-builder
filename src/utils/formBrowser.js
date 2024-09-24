import { forms } from "../data/forms.json";

export function formBrowser(id) {
  return forms.find((form) => "" + form.id === "" + id);
}
