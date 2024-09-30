export function extractEvents(itemList, value) {
  let itemEvents = itemList.find(
    (item) => "" + item.value === "" + value
  )?.events;
  if (!Array.isArray(itemEvents)) itemEvents = [];
  return itemEvents;
}
