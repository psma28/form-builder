import { useState } from "react";

export function useComponents() {
  const [components, setComponents] = useState({});
  const pushComponent = async (component) => {
    const { id } = component;
    if (components[id]) return;
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

  const getSchema = () => {
    return components;
  };

  const cleanForm = () => {
    setComponents({});
  }

  return { pushComponent, updateComponent, getComponent, getSchema, cleanForm };
}
