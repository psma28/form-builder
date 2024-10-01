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
            <span className="text-header">{modalContent?.title}</span>
            <div className="modal-close" onClick={() => toggleModal()}>
              <CloseIcon style={"modal-close-icon"} />
            </div>
          </div>
          <div className="modal-content">
            {modalContent?.content.map((paragraph, index) => {
              return (
                <p key={index} className="font-calibri">
                  {paragraph}
                </p>
              );
            })}
          </div>
          <div className="modal-actions">
            <button
              className="modal-close-button font-calibri"
              onClick={() => toggleModal()}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )
  );
}
