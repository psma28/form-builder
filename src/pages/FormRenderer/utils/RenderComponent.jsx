import { BlankComponent } from "../../../components/BlankComponent";
import { ComboboxField } from "../../../components/ComboboxField";
import { FormStructure } from "../../../components/FormStructure";
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
        return <TextField id={element.id} key={element.id}/>
      case "combobox":
        return <ComboboxField id={element.id} key={element.id}/>
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
        return <BlankComponent />;
    }
  });
}
