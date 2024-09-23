import { useState } from "react";

export const useEventQueue = () => {
  /**
   * Every event has this structure { target: string, action: Object(function or list) }
   */
  const [eventQueue, setEventQueue] = useState([]);

  /**
   * This method returns the current event queue
   * @returns
   */
  const getEventQueue = () => {
    return eventQueue;
  };

  /**
   * This method pushes a new event cluster to the queue, 
   * always at the last position. Needs the event list and
   * the actor ID.
   * @param {string} actorId
   * @param {Array: Event[]} events
   */
  const pushEvents = (actorId, events) => {
    const queueItem = { actorId: actorId, events: events };
    setEventQueue((prevQueue) => [...prevQueue, queueItem]);
  };

  /**
   * This method collapses every event from the queue that follows
   * the one specified by the actor id. For example:
   * If we have the events [1,2,3,4,5,6] and we give the parameter as
   * actorID = 3, the method collapses every event ahead 3, so the "collapsed"
   * events will be [3,4,5,6]
   * @param {String} actorId
   */
  const collapseEvents = (actorId) => {
    const activeEvents = [];

    while (eventQueue.length > 0) {
      const event = eventQueue[0];

      if (event.actorId === actorId) {
        break;
      }
      activeEvents.push(eventQueue.shift());
    }

    const collapsedEvents = [...eventQueue];
    setEventQueue(activeEvents);
    return collapsedEvents;
  };

  return { getEventQueue, pushEvents, collapseEvents };
};
