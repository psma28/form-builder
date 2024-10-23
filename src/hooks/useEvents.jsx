import { useState } from "react";
import { rollbackPayload } from "../services/EventPayloadHandler";

export function useEvents(updateComponent) {
  const [events, setEvents] = useState([]);

  /* useEffect(()=>{
    console.log("events", events);
    
  },[events])
*/
  /**
   * This method returns the current event list
   * @returns
   */
  const getEvents = () => {
    return events;
  };

  const hasEvent = (id) => {
    const check = events.find((event) => event.actorId === id);
    return check !== undefined;
  };

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
          const rollbackedPayload = rollbackPayload(event);
          //deleteFormField(targetId);
          updateComponent(targetId, rollbackedPayload);
          collapseChain(targetId);
        }
      });
    };
    collapseChain(actorId, aux);
    setEvents(aux.filter((e) => e));
  };

  return { getEvents, collapseEvents, hasEvent, pushEvent };
}
