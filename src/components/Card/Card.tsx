import React, { useState } from "react";
import Modal from "../Modal";

type Props = {
  violacao: {
    title: string;
    text: string;
  };
};

const Card = ({ violacao }: Props) => {
  const { title, text } = violacao;
  const [isShowingModal, setIsShowingModal] = useState(false);

  const handleCloseModal = () => {
    setIsShowingModal(false);
  };

  const handleShowModal = () => {
    setIsShowingModal(true)
  }

  return (
    <>
      <li className="flex flex-col bg-white px-8 py-4 md:px-16 md:py-8 text-primary rounded-xl space-y-5 hover:scale-105 transition-all group">
        <h2 className="uppercase text-xl font-bold">{title}</h2>
        <button className="mx-0 w-full transition-all bg-white text-primary border-2 border-primary px-2 md:px-8 py-4 rounded-xl hover:bg-primary hover:text-white " onClick={handleShowModal}>Ver sobre</button>
      </li>
      <Modal
        isShowing={isShowingModal}
        onClose={handleCloseModal}
        title={title}
        text={text}
      />
    </>
  );
};

export default Card;
