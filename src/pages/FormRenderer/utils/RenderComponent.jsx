import { BlankComponent } from "../../../components/BlankComponent";
import { CheckAndFillField } from "../../../components/CheckAndFillField";
import { CheckboxField } from "../../../components/CheckboxField";
import { ComboboxField } from "../../../components/ComboboxField";
import { FormStructure } from "../../../components/FormStructure";
import { RadioButtonField } from "../../../components/RadioButtonField";
import { TextField } from "../../../components/TextField";

/**
 * Function that receives a list of JSON objects that
 * should be mapped into REACT components
 * @param {Array} content
 * @returns
 */
export function RenderComponent(content) {
  return content.map((element) => {
    const componentName = element.component;

    switch (componentName) {
      case "text-field":
        return <TextField id={element.id} key={element.id} />;
      case "combobox":
        return <ComboboxField id={element.id} key={element.id} />;
      case "radio-field":
        return <RadioButtonField id={element.id} key={element.id} />;
      case "checkbox":
        return <CheckboxField id={element.id} key={element.id} />;
      case "checkandfill":
        return <CheckAndFillField id={element.id} key={element.id}/>;
      case "form-structure":
        return (
          <FormStructure
            key={element.id}
            title={element.label}
            indication={element.indication}
          >
            {RenderComponent(element.content)}
          </FormStructure>
        );
      default:
        return <BlankComponent key={Math.random()} />;
    }
  });
}
