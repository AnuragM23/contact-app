import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div   className="grid place-items-center  absolute top-0 z-40 backdrop-blur h-screen w-screen">
          <div className="m-auto z-50 relative min-h-[200px] rounded-md  w-[320px] bg-white">
            <div className="flex justify-end p-4">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
          {/* <div className="absolute top-0 z-40 backdrop-blur h-screen w-screen" /> */}
        </div>
      )}
    </>
  ,document.getElementById('modal-root'));
}

export default Modal;
