import { itemMapper } from "../mappings/ResponseMapper";
import { functionExecutor } from "../mappings/APIFunctionMapper";

export async function handlePayload(
  actorValue,
  event,
  setLoading,
  updateComponentState
) {
  let payload = event?.payload;
  let targetId = event?.target;
  if (!payload) return;

  let payloadResults = {};
  if ("visible" in payload)
    payloadResults = { ...payloadResults, visible: payload.visible };
  if ("value" in payload)
    payloadResults = { ...payloadResults, value: payload.value };
  if ("items" in payload && Array.isArray(payload.items))
    payloadResults = {
      ...payloadResults,
      items: itemMapper(payload.items),
    };
  if (
    "function-value" in payload &&
    typeof payload["function-value"] === "string"
  ) {
    const res = await functionExecutor(
      payload["function-value"],
      actorValue,
      setLoading
    );
    if (res) {
      payloadResults = {
        ...payloadResults,
        value: res,
      };
      updateComponentState(targetId, { value: res });
    }
  }
  if ("seeder" in payload && typeof payload.seeder === "string") {
    const res = await functionExecutor(payload.seeder, actorValue, setLoading);
    payloadResults = { ...payloadResults, items: itemMapper(res) };
    updateComponentState(targetId, { items: itemMapper(res) });
    //payloadResults = { ...payloadResults, items: payload.seeder }
  }
  if ("info" in payload && typeof payload.info === "string") {
    payloadResults = { ...payloadResults, info: payload.info };
  }
  updateComponentState(targetId, payloadResults);
}
export function rollbackPayload(event) {
  let payload = event?.payload;
  if (!payload) return {};
  let mappedPayload = {};
  if ("visible" in payload)
    mappedPayload = { ...mappedPayload, visible: !payload.visible };
  if ("items" in payload || "seeder" in payload)
    mappedPayload = { ...mappedPayload, items: [] };
  //if("value" in payload || "function-value" in payload){
  mappedPayload = { ...mappedPayload, value: "" };
  //}
  return mappedPayload;
}
