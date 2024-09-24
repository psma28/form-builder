import { toNormalText, toSnakeCase } from "../stringTools";

export function comboboxResponseMapper(data) {
  return data.map((item) => {
    let events = item.events;
    if (!events) events = [];
    return {
      id:
        item.id ||
        toSnakeCase(item.name) ||
        toSnakeCase(item.value) ||
        crypto.randomUUID(),
      label:
        item.name ||
        item.label ||
        toNormalText(item.value) ||
        toNormalText(this.value) ||
        toNormalText(this.id),
      value: item.value || toSnakeCase(item.name) || toSnakeCase(item.label),
      events: events,
    };
  });
}
