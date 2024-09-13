import { BlankComponent } from "../../../components/BlankComponent";
import { NestedComponent } from "../../../components/NestedComponent";
import { TextField } from "../../../components/TextField";
import { validatorMapper } from "../../../utils/mappings/validatorMapper";
export function ComponentGenerator(schema) {
  return schema.content.map((element) => {
    const componentName = element.component;
    switch (componentName) {
      case "text-field":
        return (
          <TextField
            id={element.id}
            key={element.id}
            label={element.label}
            info={element.info}
            props={{ type: element.type }}
            validators={validatorMapper(element.validators)}
          />
        );
      case "nested-component":
        return <NestedComponent key={element.id}>
            {ComponentGenerator(element)}
        </NestedComponent>
      default:
        return <BlankComponent />;
    }
  });
}
