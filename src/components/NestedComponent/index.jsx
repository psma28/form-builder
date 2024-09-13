import { Children, isValidElement, cloneElement } from "react";

export function NestedComponent ({children}){

    const dumbFunction = ()=>{alert("este componente está NESTEADO")};

    const childrenWithProps = Children.map(children, child => {
        
        if (isValidElement(child)) {
          return cloneElement(child, { eventHandler: dumbFunction});
        }
        return child;
      });

    return (
        <>
            {childrenWithProps}
        </>
    )
}