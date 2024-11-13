import { useRef, useState } from "react";

export function useFiles(
  fieldId,
  allowed,
  maxFileSize,
  getFieldStatus,
  updateComponent
) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const fileInputRef = useRef(null);
  const handleDrop = (e) => {
    e.preventDefault();
    if (getFieldStatus() === false) return;
    const uploadedFile = e.dataTransfer.files[0];
    handleFileValidation(uploadedFile);
    setIsDrag(false);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    if (getFieldStatus() === false) return;
    e.stopPropagation();
    setError(null);
    setIsDrag(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (getFieldStatus() === false) return;
    e.stopPropagation();
    setIsDrag(false);
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    handleFileValidation(selectedFile);
  };

  const getFileIcon = (fileType) => {
    if (!fileType) return null;
    const type = fileType.split("/")[0];
    switch (type) {
      case "image":
        return "🖼️";
      case "application":
        return "📄";
      case "video":
        return "🎥";
      default:
        return "📁";
    }
  };
  const getFileName = (file) => {
    if (!file) return "";
    const name = file.split(".")[0];
    return name;
  };

  const handleClick = () => {
    if (getFieldStatus() === false) return;
    fileInputRef.current.click();
  };

  const handleFileValidation = (file) => {
    const fileType = file.type.split("/")[1];
    const fileTypes = [...allowed]
    let index = fileTypes.indexOf("docx");
    if (index !== -1) {
      fileTypes[index] = "vnd.openxmlformats-officedocument.wordprocessingml.document";
    }
    index = fileTypes.indexOf("rar");
    if (index !== -1) {
      fileTypes[index] = "x-compressed";
    }
    index = fileTypes.indexOf("zip");
    if (index !== -1) {
      fileTypes[index] = "x-zip-compressed";
    }
    const fileSizeMB = file.size / (1024 * 1024);
    if (!fileTypes.includes(fileType)) {
      setError(`Formato inválido. Formatos permitidos: ${allowed.join(", ")}`);
      setFile(null);
      return;
    }

    if (fileSizeMB > maxFileSize) {
      setError(`El archivo supera el tamaño máximo de ${maxFileSize} MB.`);
      setFile(null);
      return;
    }
    setFile(file);
    setError(null);
    updateComponent(fieldId, { value: file });
  };

  return {
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
  };
}
