import { useContext, useEffect } from "react";
import { validatorMapper } from "./validatorMapper";
import { EventManagerContext } from "../../context/EventManagerContext";

export function FormSchemaInit({ schema }) {
  const { pushComponent } = useContext(EventManagerContext);

  useEffect(() => {
    console.log("init components", schema);
    const pushElements = (element) => {
      const componentName = element.component;

      if ("validators" in element) {
        element = {
          ...element,
          validators: validatorMapper(element.validators),
        };
      }
      if (
        componentName === "form-structure" ||
        componentName === "form-row" ||
        componentName === "document-manager"
      ) {
        element.content.forEach(pushElements);
        return;
      }

      pushComponent(element);
    };

    schema.forEach(pushElements);
  }, [schema, pushComponent]);

  return null;
}
