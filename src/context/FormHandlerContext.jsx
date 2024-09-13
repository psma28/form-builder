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

  useEffect(() => {
    console.log(form);
  }, [form]);

  const sendForm = (setLoading) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    console.log("Pre envio: ", form);
  };

  return <FormHandlerContext.Provider value={{updateForm, sendForm}}>
    {children}
  </FormHandlerContext.Provider>
};
