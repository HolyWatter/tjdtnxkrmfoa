import Modal from "components/shared/modal";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface ModalContextValue {
  openModal: (component: React.ReactNode) => void;
  closeModal: () => void;
}

const Context = createContext<ModalContextValue | undefined>(undefined);

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalState, setModalState] = useState<{
    open: boolean;
    component: null | React.ReactNode;
  }>({
    open: false,
    component: null,
  });

  const $root_portal = document.getElementById("root-portal");

  const closeModal = useCallback(() => {
    setModalState({
      open: false,
      component: null,
    });
  }, [setModalState]);

  const openModal = useCallback(
    (component: React.ReactNode) => {
      setModalState({
        open: true,
        component: component,
      });
    },
    [setModalState]
  );

  const values = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [openModal, closeModal]
  );

  return (
    <Context.Provider value={values}>
      {children}
      {$root_portal != null && modalState.open
        ? createPortal(<Modal>{modalState.component}</Modal>, $root_portal)
        : null}
    </Context.Provider>
  );
}

export function useModalContext() {
  const values = useContext(Context);
  if (values == null) {
    throw new Error("Context 이상");
  }
  return values;
}
