import { useState } from "react";
import Card from "./Card";

interface TarefasProps{
    abrir: () => void
    cards: ICard[]
    concluir: (id: string) => void
}


export default function Tarefas({ abrir, cards, concluir }: TarefasProps){

    const cardsIncompletos = cards.filter(card => card.concluido === false)

    return (
        <main className="flex flex-col flex-grow-0 h-auto gap-3 mt-7 overflow">
            {
            cardsIncompletos.map(card => 
                <Card onClick={abrir} key={card.id} card={card} concluir={concluir}/>
            )
        }
        </main>
    )
}