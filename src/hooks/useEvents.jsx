import { useState } from "react";
import { rollbackPayload } from "../services/EventPayloadHandler";

export function useEvents(updateComponent, getComponent) {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   console.log("events", events);
  // }, [events]);

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

      //El actor ID es el componente que deseamos colapsar
      const fullActorComponent = getComponent(actorId);
      if (!fullActorComponent) {
        return;
      }
      if (Array.isArray(fullActorComponent.items)) {
        fullActorComponent.items.forEach((item) => {
          if (item?.id) collapseChain(item.id);
        });
      }

      (fullActorComponent.subevents || []).forEach((sub) => {
        (sub.events || []).forEach((subEvent) => {
          if (!subEvent?.target) return;
          aux.forEach((event) => {
            if (event && event.target === subEvent.target) {
              const stillSelected =
                Array.isArray(fullActorComponent.value) &&
                fullActorComponent.value.includes(sub["item-value"]);
              if (!stillSelected) {
                rollbackedEvents.push(event);
                delete aux[aux.indexOf(event)];
                const rollbackedPayload = rollbackPayload(subEvent);
                updateComponent(subEvent.target, rollbackedPayload);
                collapseChain(subEvent.target);
              }
            }
          });
        });
      });
    };
    collapseChain(actorId);
    setEvents(aux.filter((e) => e));
  };

  return { getEvents, collapseEvents, hasEvent, pushEvent };
}
