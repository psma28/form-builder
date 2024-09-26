import { useContext } from "react";
import { EventManagerContext } from "../../../context/EventManagerContext";
import { RenderComponent } from "../utils/RenderComponent";

export function ComponentGenerator({ schema }) {
  const { pushComponent, getComponent } = useContext(EventManagerContext);
  return <>{RenderComponent(schema, pushComponent, getComponent)}</>;
}
