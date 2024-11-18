import { useContext } from "react";
import "./index.css";
import { ModalContext } from "../../../../context/ModalContext";
import { CloseIcon } from "../../../../assets/icons/CloseIcon";

export function CustomModal() {
  const { toggleModal, isOpen, modalContent } = useContext(ModalContext);

  return (
    isOpen && (
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-title">
            <span className="font-roboto">{modalContent?.title}</span>
            <div className="modal-close" onClick={() => toggleModal()}>
              <CloseIcon style={"modal-close-icon"} />
            </div>
          </div>
          <div className="modal-content">
            {modalContent?.content.map((paragraph, index) => {
              return (
                <p key={index} className="font-roboto">
                  {paragraph}
                </p>
              );
            })}
          </div>
          <div className="modal-actions">
            {modalContent?.action && modalContent.action.function && (
              <button
                className="modal-action-button font-roboto"
                onClick={() => {
                  modalContent.action.function();
                  toggleModal();
                }}
              >
                {modalContent.action.label}
              </button>
            )}
            <button
              className="modal-close-button font-roboto"
              onClick={() => {
                if (modalContent?.close) {
                  modalContent.close();
                }
                toggleModal();
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )
  );
}
