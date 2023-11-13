import { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";

interface CardProps{
    onClick: () => void
    card: ICard
    concluir: (id: string) => void
  }

export default function Card({ card, onClick, concluir }: CardProps) {
  
  return (
    <div
      className={`flex bg-amber-100 text-black min-h-max max-h-20 h-20 rounded-xl w-full items-center justify-around shadow-lg shadow-black`}
    >
        <div className={`${card.cor} w-[4%] h-full rounded-l-md`}></div>
        <div className="flex w-[20%] justify-center">
            <AiOutlineClose size={25} className="text-red-600" />
        </div>
      <div className={`flex flex-col px-5 gap-2 items-center flex-1 h-full w-[45%] justify-center`}
            onClick={onClick}>
        <div
          className={`flex h-6 pt-2 font-semibold`}
        >
          {card.texto}
        </div>
        <div className="flex items-center gap-1 text-sm h-6 font-extralight">
          <AiOutlineClockCircle />
          {card.tempo}
        </div>
      </div>
      <div className="flex flex-col h-full items-center justify-center p-2 w-[20%]"
          onClick={() => concluir(card.id)}
            >
        <AiOutlineCheck size={25} className="text-blue-600" />
      </div>
      
    </div>
  );
}
