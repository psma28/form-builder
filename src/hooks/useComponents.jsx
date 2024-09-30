import { useEffect, useState } from "react";

export function useComponents() {
  const [components, setComponents] = useState({});
  useEffect(()=>{
    console.log("components changed", components);
    
  },[components])
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

  return {pushComponent, updateComponent, getComponent}
}