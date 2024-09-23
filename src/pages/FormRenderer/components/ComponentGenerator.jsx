import { useContext } from "react";
import { EventManagerContext } from "../../../context/EventManagerContext";
import { RenderComponent } from "../utils/RenderComponent";
import { FormHandlerContext } from "../../../context/FormHandlerContext";

export function ComponentGenerator({ schema }) {
  const { pushComponent, getComponent, updateComponent } =
    useContext(EventManagerContext);
  const { updateForm } = useContext(FormHandlerContext);

  const handleUpdate = () => {
    updateComponent("institucion-text", {
      visible: false
    });
  };
  return (
    <>
      {RenderComponent(schema, pushComponent, getComponent)}
      <button onClick={handleUpdate}>Update Component</button>
    </>
  );
}
