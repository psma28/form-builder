import { Children, isValidElement, cloneElement, useContext } from "react";
import { useNestedStructure } from "./hooks/useNestedStructure";
import { useEventQueue } from "./hooks/useEventQueue";
import { LoadingContext } from "../../context/LoadingContext";
import { functionExecutor } from "../../utils/mappings/APIFunctionMapper";

export function NestedComponent({ children, schema }) {

  const { getSchema, getComponent, modifyComponent } = useNestedStructure(schema);
  const { pushEvents, collapseEvents } = useEventQueue();
  const { setLoading } = useContext(LoadingContext);

  const eventHandler = (actorId, value, events) => {
    console.log("activando eventos", actorId, value, events);
    if (events.length === 0) return;
    const rollbackEventClusters = collapseEvents(actorId).reverse();
    rollbackEventClusters.forEach((eventCluster) => {
      eventCluster.events.forEach((event) => {
        const targetId = event.target;
        const targetSchema = getComponent(targetId);
        console.log("objetivo a hacer rollback",targetSchema);
        console.log("evento a hacer rollback",event);
        
      });
    });
    console.log("eventos a hacer rollback", rollbackEventClusters);
    

    events.forEach((event) => {
      const targetId = event.target;
      const payload = payloadMapper(event.payload, value);
      console.log("payload mapeado", payload);
      
      modifyComponent(targetId, payload)
    });
    pushEvents(actorId, events);
  };

  const payloadMapper = (payload, actorValue)=>{
    let mappedPayload = {}
    console.log("en el mapeador", payload);
    

    if("visible" in payload) mappedPayload = { ...mappedPayload, visible: payload.visible } 

    if("value" in payload) mappedPayload = { ...mappedPayload, ...payload.value }

    if("items" in payload && Array.isArray(payload.items)) mappedPayload = { ...mappedPayload, items: payload.items }

    if("seeder" in payload && typeof payload.seeder === "string") {
      setLoading(true);
        functionExecutor(payload.seeder, actorValue)
          .then((res) => {
            () => setLoading(false)
            return { ...mappedPayload, items: res }
          })
    }
    return mappedPayload;
  }

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const { validators } = child.props;
      const newProps = { ...getComponent(child.props.id), eventHandler: eventHandler}
      return cloneElement(child, { ...newProps, validators });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
}
