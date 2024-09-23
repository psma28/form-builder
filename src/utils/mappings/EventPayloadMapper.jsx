import { functionExecutor } from "./APIFunctionMapper";
import { comboboxResponseMapper } from "./ResponseMapper";

export function payloadMapper(
  payload,
  actorValue,
  setLoading,
  componentUpdater,
  targetId
) {
  let mappedPayload = {};
  if ("visible" in payload)
    mappedPayload = { ...mappedPayload, visible: payload.visible };

  if ("value" in payload)
    mappedPayload = { ...mappedPayload, ...payload.value };

  if ("items" in payload && Array.isArray(payload.items))
    mappedPayload = {
      ...mappedPayload,
      items: comboboxResponseMapper(payload.items),
    };

  if ("seeder" in payload && typeof payload.seeder === "string") {
    setLoading(true);
    functionExecutor(payload.seeder, actorValue).then((res) => {
      mappedPayload = { ...mappedPayload, items: comboboxResponseMapper(res) };
      componentUpdater(targetId, mappedPayload);
      setLoading(false);
      return;
    });
  }
  componentUpdater(targetId, mappedPayload);
}

export function rollbackPayloadMapper(payload) {
  let mappedPayload = {};
  if ("visible" in payload)
    mappedPayload = { ...mappedPayload, visible: !payload.visible };
  if("items" in payload || "seeder" in payload)
    mappedPayload = { ...mappedPayload, items: []}
  return mappedPayload;
}
