import { functionExecutor } from "./APIFunctionMapper";

export function payloadMapper(payload, actorValue, setLoading) {
  let mappedPayload = {};
  console.log("en el mapeador", payload);

  if ("visible" in payload)
    mappedPayload = { ...mappedPayload, visible: payload.visible };

  if ("value" in payload)
    mappedPayload = { ...mappedPayload, ...payload.value };

  if ("items" in payload && Array.isArray(payload.items))
    mappedPayload = { ...mappedPayload, items: payload.items };

  if ("seeder" in payload && typeof payload.seeder === "string") {
    setLoading(true);
    functionExecutor(payload.seeder, actorValue).then((res) => {
      () => setLoading(false);
      return { ...mappedPayload, items: res };
    });
  }
  return mappedPayload;
}
