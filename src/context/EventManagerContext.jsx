import { createContext, useContext, useState } from "react";
import { LoadingContext } from "./LoadingContext";
import {
  payloadMapper,
  rollbackPayloadMapper,
} from "../utils/mappings/EventPayloadMapper";
import { functionExecutor } from "../utils/mappings/APIFunctionMapper";
import { comboboxResponseMapper } from "../utils/mappings/ResponseMapper";
import { FormHandlerContext } from "./FormHandlerContext";

export const EventManagerContext = createContext();

export function EventManagerProvider({ children }) {
  /**
   * Every event is represented as ............
   * Where the payload is an object which keys may include values sush as:
   * visibility flag, item array, seeder function or value.
   */
  const [events, setEvents] = useState([]);
  const [components, setComponents] = useState({});
  const { setLoading } = useContext(LoadingContext);
  const { deleteFormField, updateForm} = useContext(FormHandlerContext);

  const eventHandler = (actorId, value, events) => {
    collapseEvents(actorId);
    if (events.length === 0) return;
    for(const event of events){
      const targetId = event.target;
      payloadMapper(
        event.payload,
        value,
        setLoading,
        updateComponent,
        targetId,
        updateForm
      );
      pushEvent(actorId, targetId, event.payload);
    }
    
  };

  const pushComponent = async (component) => {
    const { id } = component;
    if (components[id]) return;
    if ("items" in component && typeof component.items === "string") {
      setLoading(true);
      await functionExecutor(component.items, "").then((res) => {
        component.items = comboboxResponseMapper(res);
        setComponents((prev) => ({ ...prev, [id]: component }));
        setLoading(false);
        return;
      });
    }
    setComponents((prev) => ({ ...prev, [id]: component }));
  };

  const updateComponent = (id, props) => {
    setComponents((prev) => ({
      ...prev,
      [id]: { ...prev[id], ...props },
    }));
  };

  const getComponent = (id) => {
    return components[id];
  };

  /*useEffect(() => {
    console.log("arbol de eventos actualizandose", events);
  }, [events]);
 */

  /**
   * This method returns the current event list
   * @returns
   */
  const getEvents = () => {
    return events;
  };

  const hasEvent = (id)=>{
    const check = events.find((event) => event.actorId === id)
    return check !== undefined
  }

  /**
   * This method pushes a new event to the list
   * Requires an actor ID, targetID and payload.
   * @param {string} actorId
   * @param {string} targetId
   * @param {Object} payload
   */
  const pushEvent = (actorId, target, payload) => {
    setEvents((prev) => [...prev, { actorId, target, payload }]);
  };

  /**
   * This method collapses every event
   * @param {String} actorId
   * @returns {Array}
   */
  const collapseEvents = (actorId) => {    
    const rollbackedEvents = [];
    const aux = [...events];
    const collapseChain = (actorId) => {
      aux.forEach((event) => {
        if (event.actorId === actorId) {
          rollbackedEvents.push(event);
          delete aux[aux.indexOf(event)];
          const targetId = event.target;
          const rollbackedPayload = rollbackPayloadMapper(event.payload);
          deleteFormField(targetId);
          updateComponent(targetId, rollbackedPayload);
          collapseChain(targetId);
        }
      });
    };
    collapseChain(actorId, aux);
    setEvents(aux.filter((e) => e));
  };

  return (
    <EventManagerContext.Provider
      value={{
        pushComponent,
        getComponent,
        updateComponent,
        getEvents,
        pushEvent,
        collapseEvents,
        eventHandler,
        hasEvent
      }}
    >
      {children}
    </EventManagerContext.Provider>
  );
}
