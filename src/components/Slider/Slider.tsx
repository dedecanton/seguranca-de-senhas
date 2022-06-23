import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "../SwiperButton";

type Props = {
  elements: { title: string; text: string }[];
};

const Slider = ({ elements }: Props) => {
  return (
    <div className="w-full slide max-w-xl flex justify-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        className="flex flex-col items-center justify-center space-y-0"
      >
        {elements.map((element, index) => (
          <SwiperSlide
            className="h-full bg-white text-primary py-4 border-4 border-primary flex flex-col items-center justify-center space-y-5 px-8"
            key={index}
          >
            <h2 className="text-lg uppercase font-bold underline">
              {element.title}
            </h2>
            <p className="text-justify">{element.text}</p>
          </SwiperSlide>
        ))}
        <SwiperSlide className="h-full bg-white text-primary py-4 border-4 border-primary flex flex-col items-center justify-center space-y-5 px-8">
          <h2 className="text-lg uppercase font-bold underline">
            A estrutura ideal para senhas seguras
          </h2>
          <ul className="text-justify">
            <li className="list-disc">Tem no mínimo de 8 caracteres.</li>
            <li className="list-disc">Tem no mínimo 2 letras maiúsculas: ABCDEFG.</li>
            <li className="list-disc">Tem no mínimo 1 letra minúscula: abcdefgh.</li>
            <li className="list-disc">Tem no mínimo 1 número: 123456.</li>
            <li className="list-disc">Tem no mínimo 2 símbolos: @#$%</li>
          </ul>
        </SwiperSlide>

        <div className="navigation flex space-x-10 pt-3">
          <SwiperButton />
          <SwiperButton next />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
