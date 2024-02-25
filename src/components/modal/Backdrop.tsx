import { ReactNode } from "react";

interface IBackDrop {
  children: ReactNode;
  closeModal: () => void;
}

export default function Backdrop({ children, closeModal }: IBackDrop) {
  function close(e: any) {
    e.target.classList.contains("modal-backdrop") && closeModal();
  }
  return <div className="modal-backdrop flex justify-center items-center fixed w-full h-screen left-0 top-0 bg-[#0000006a] z-[9999999]" onClick={close}>{children}</div>;
}
