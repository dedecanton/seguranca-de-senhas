import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
  isShowing: boolean;
  title: string;
  text: string;
  onClose: () => void;
};

const Modal = ({ isShowing, title, text, onClose }: Props) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay fixed top-0 left-0 w-full h-screen z-30 bg-primary opacity-90" />
          <div
            className="modal-wrapper fixed top-0 left-0 w-full h-screen z-40 flex justify-center items-center text-center "
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal relative w-[90%] max-w-xl bg-white px-8 py-8 rounded">
              <h2 className="text-xl text-primary uppercase font-bold mb-4">
                {title}
              </h2>
              <p className="text-lg text-justify">{text}</p>
                <AiOutlineClose onClick={onClose} className="text-xl text-primary absolute top-4 right-4 cursor-pointer" />
            </div>

          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
