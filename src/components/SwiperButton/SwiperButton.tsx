import React from "react";
import { useSwiper } from "swiper/react";

import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
} from "react-icons/ai";

type Props = {
  next?: boolean;
};

const SwiperButton = ({ next }: Props) => {
    const swiper = useSwiper()
    const element = next ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />;
    
    const handleClick = () => {
        if(next) swiper.slideNext()
        else swiper.slidePrev()
    }
    
  return (
    <div className="text-3xl text-primary cursor-pointer transition-all hover:scale-105" onClick={handleClick}>
        {element}
    </div>
  )
};

export default SwiperButton;
