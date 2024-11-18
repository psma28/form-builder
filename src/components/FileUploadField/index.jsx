import "./index.css";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { useFiles } from "./hooks/useFiles";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { InfoPopup } from "../InfoPin";

export function FileUploadField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { getComponent, updateComponent } = useContext(FormSchemaContext);

  const {
    label,
    maxsize,
    allow = [],
    highlighted = false,
    // visible = true,
    // events = [],
    // extend = false,
    info,
  } = getComponent(id);
  const {
    file,
    getFileIcon,
    getFileName,
    removeFile,
    isDrag,
    fileInputRef,
    handleClick,
    error,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleFileSelect,
  } = useFiles(id, allow, maxsize, getFieldStatus, updateComponent);

  return (
    <div className="file-container">
      <div className="file-label font-roboto">
        <span>{label}</span>
        {info && <InfoPopup info={info} />}
      </div>
      <div
        className={
          "file-handler" + (getFieldStatus() === false ? " file-disabled" : "")
        }
      >
        {file ? (
          <div
            className={
              "file-status font-roboto" +
              (getFieldStatus() === false ? " file-disabled" : " active")
            }
          >
            <div className="file-info">
              <span>{getFileIcon(file.type)}</span>
              <span>{getFileName(file.name)}</span>
            </div>
            <div
              className="file-remove"
              onClick={() => {
                if (getFieldStatus() === true) removeFile();
              }}
            >
              <TrashIcon
                className="file-remove-icon"
                title="Eliminar archivo"
              />
            </div>
          </div>
        ) : (
          <div
            className={
              "file-uploader font-roboto " +
              (error === null ? "" : " container-error ") +
              (isDrag === true ? " container-drag " : "") +
              (highlighted ? " file-flaged" : "")
            }
          >
            <div
              className="file-drag-space"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onDragLeave={handleDragLeave}
              onDragEnter={handleDragEnter}
              onClick={handleClick}
            ></div>
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} />

            {error ? <p>{error}</p> : <p>Seleccione o arrastre un archivo </p>}
          </div>
        )}
      </div>
    </div>
  );
}
