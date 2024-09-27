import { FormStructure } from "../../../components/FormStructure";
import { BlankComponent } from "../../../components/BlankComponent";
import { TextField } from "../../../components/TextField";
import { RadioButtonsField } from "../../../components/RadioButtonsField";
import { ComboboxField } from "../../../components/ComboboxField";
import { CheckboxField } from "../../../components/CheckboxField";
import { CheckAndFillField } from "../../../components/CheckAndFill";

/**
 * Function that receives a list of JSON objects that
 * should be mapped into REACT components
 * @param {Array} content
 * @returns
 */
export function RenderComponents(schema) {
  return schema.map((element) => {
    const componentName = element.component;
    switch (componentName) {
      case "text":
        return <TextField id={element.id} key={element.id} />;
      case "radio":
        return <RadioButtonsField id={element.id} key={element.id} />;
      case "combobox":
        return <ComboboxField id={element.id} key={element.id} />;
      case "checkbox":
        return <CheckboxField id={element.id} key={element.id} />;
      case "checkandfill":
        return <CheckAndFillField id={element.id} key={element.id} />;
      case "form-structure":
        return (
          <FormStructure
            key={element.id}
            title={element.label}
            indication={element.indication}
          >
            {RenderComponents(element.content)}
          </FormStructure>
        );
      default:
        return <BlankComponent key={Math.random()} />;
    }
  });
}
