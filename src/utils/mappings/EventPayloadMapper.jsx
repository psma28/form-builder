import { functionExecutor } from "./APIFunctionMapper";
import { comboboxResponseMapper } from "./ResponseMapper";

export async function payloadMapper(
  payload,
  actorValue,
  setLoading,
  componentUpdater,
  targetId,
  stageForm
) {
  let mappedPayload = {};
  if ("visible" in payload)
    mappedPayload = { ...mappedPayload, visible: payload.visible };

  if ("value" in payload) {
    stageForm({ targetId, res: payload.value });
  }

  if (
    "function-value" in payload &&
    typeof payload["function-value"] === "string"
  ) {
    setLoading(true);
    try {
      const res = await functionExecutor(payload["function-value"], actorValue);
      if (res) {
        stageForm({ targetId, res });
      }
    } finally {
      setLoading(false);
    }
  }

  //mappedPayload = { ...mappedPayload, ...payload.value };

  if ("items" in payload && Array.isArray(payload.items))
    mappedPayload = {
      ...mappedPayload,
      items: comboboxResponseMapper(payload.items),
    };

  if ("seeder" in payload && typeof payload.seeder === "string") {
    setLoading(true);
    try {
      const res = await functionExecutor(payload.seeder, actorValue);
      mappedPayload = { ...mappedPayload, items: comboboxResponseMapper(res) };
      componentUpdater(targetId, mappedPayload);
    } finally {
      setLoading(false);
    }
  }
  componentUpdater(targetId, mappedPayload);
}

export function rollbackPayloadMapper(payload) {
  let mappedPayload = {};
  if ("visible" in payload)
    mappedPayload = { ...mappedPayload, visible: !payload.visible };
  if ("items" in payload || "seeder" in payload)
    mappedPayload = { ...mappedPayload, items: [] };
  return mappedPayload;
}
