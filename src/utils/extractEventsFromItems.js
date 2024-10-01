export function extractEvents(itemList, value) {
  if (!itemList) return [];
  let itemEvents = itemList.find(
    (item) => "" + item.value === "" + value
  )?.events;
  if (!Array.isArray(itemEvents)) itemEvents = [];
  return itemEvents;
}
