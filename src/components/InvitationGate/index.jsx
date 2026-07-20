import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { LoadingContext } from "../../context/LoadingContext";
import { ModalContext } from "../../context/ModalContext";
import { FormBlockContext } from "../../context/FormBlockContext";
import { useInvitation } from "./hooks/useInvitation";

export function InvitationGate() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { setFieldAccess } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { updateComponent, getComponent, form } = useContext(FormSchemaContext);
  const { setModalContent, toggleModal } = useContext(ModalContext);
  const { block } = useContext(FormBlockContext);

  useInvitation({
    token,
    projectId: form.id_proyecto,
    accessType: form?.access || "default",
    canCompleteMsg: form?.can_complete_msg,
    updateComponent,
    getComponent,
    setLoading,
    setFieldAccess,
    setModalContent,
    toggleModal,
    block,
  });

  return null;
}
