import { createContext, useEffect, useState } from "react";

export const FormHandlerContext = createContext();

export const FormHandlerProvider = ({ children }) => {
  const [form, setForm] = useState({});

  const updateForm = (key, value) => {
    setForm(() => ({
      ...form,
      [key]: value,
    }));
  };

  const deleteFormField = (key)=>{
    delete form[key];
  }

  const getFieldValue = (key) =>{
    const value = form[key]; 
    return value !== undefined ? value : "";
  }

  useEffect(() => {
    console.log("formulario", form);
  }, [form]);

  const sendForm = (setLoading) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    console.log("Pre envio: ", form);
  };

  return <FormHandlerContext.Provider value={{updateForm, sendForm, getFieldValue, deleteFormField}}>
    {children}
  </FormHandlerContext.Provider>
};
