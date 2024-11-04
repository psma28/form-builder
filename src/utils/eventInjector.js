/**
 * Este método inyecta los eventos especificados por el campo subevents del esquema
 * JSON del formulario.
 * @param {*} subevents
 * @param {*} items
 * @returns
 */

export function injectEvents(subevents, items) {    
  if (!subevents) return items;
  const result = items.map((item) => {
    const event = subevents.find((e) => e["item-value"] === item.value);
    return event
      ? {
          ...item,
          events: event.events,
        }
      : item;
  });
  return result;
}
