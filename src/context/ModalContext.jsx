import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Titulo",
    content: ["Contenido", "aqui"],
  });

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ModalContext.Provider
      value={{ toggleModal, isOpen, modalContent, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
}
