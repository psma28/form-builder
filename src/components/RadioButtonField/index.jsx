import "./index.css"
import { useContext, useState } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { EventManagerContext } from "../../context/EventManagerContext";
import { BlankComponent } from "../BlankComponent";
import { InfoPopup } from "../InfoPin";

export function RadioButtonField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { getComponent } = useContext(EventManagerContext);
  const [selected, setSelected] = useState("");

  if (!getComponent(id)) return <BlankComponent />;
  const { label, visible = true, items = [], info } = getComponent(id);
  return (
    visible &&
    items.length > 0 &&
    Array.isArray(items) && (
      <div className="radio-container">
        <div className="radio-label">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info}/>}
        </div>
        <div className={"radio-options" +
            (getFieldStatus() === false ? " disabled-radio" : "")
        }>
          {items.map((item) => {
            return (
              <div className="radio-item" key={item.id}>
                <label className="font-calibri">
                  <input
                    type="radio"
                    value={item.value}
                    disabled={!getFieldStatus()}
                    checked={selected === item.value}
                    onChange={(event)=>{setSelected(event.target.value)}}
                    />
                  <span className="radio-checkmark"></span>
                  <span>{item.label}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
