import { useState } from "react";

export function useNestedStructure(componentList){

    const [ schema, setSchema ] = useState(componentList);

    const getSchema = ()=>{
        return schema;
    };

    const getComponent = (componentId) => {
        return schema.find((component) => component.id === componentId) || null;
    };

    const modifyComponent = (componentId, props) =>{
        const modifiedSchema = schema.map((component)=>{
            if(component.id === componentId){
                return {
                    ...component,
                    ...props
                }
            }
            return component;
        })
        setSchema(modifiedSchema);
    }

    return { getSchema, getComponent, modifyComponent };
}