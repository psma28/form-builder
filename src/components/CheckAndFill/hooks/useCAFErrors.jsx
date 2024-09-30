import { useState } from "react";

export function useCAFErrors() {
  const [errors, setErrors] = useState({});

  const getFieldErrors = (id)=>{    
    const list = errors[""+id];
    return list === undefined ? []: list;
  }

  const setFieldErrors = (id, errors)=>{
    setErrors((prev)=>{
        return {...prev  , [""+id]:errors}
    })
  }

  return { errors, getFieldErrors, setFieldErrors };
}