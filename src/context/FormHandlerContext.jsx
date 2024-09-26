import { createContext, useEffect, useState } from "react";

export const FormHandlerContext = createContext();

export function FormHandlerProvider({ children }) {
  const [form, setForm] = useState({});

  useEffect(() => {
    console.log("form", form);
  },[form])

  const updateForm = (key, value) => {    
    setForm(() => ({
      ...form,
      [key]: value,
    }));
  };

  const attachForm = (cluster) => {
    setForm((prev)=>(
      {
        ... prev, ...cluster
      }
    ))
  }

  const deleteFormField = (key) => {
    delete form[key]
  };

  const getFieldValue = (key) => {
    const value = form[key];
    return value !== undefined ? value : "";
  };


  const sendForm = (setLoading) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log("Pre envio: ", form);
  };

  return (
    <FormHandlerContext.Provider
      value={{ updateForm, sendForm, getFieldValue, deleteFormField, attachForm }}
    >
      {children}
    </FormHandlerContext.Provider>
  );
}
