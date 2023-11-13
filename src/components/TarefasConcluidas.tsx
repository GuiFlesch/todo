import Card from "./Card";

interface TarefasProps{
    abrir: () => void
    cards: ICard[]
    concluir: (id: string) => void

}

export default function TarefasConcluidas({abrir, cards, concluir }: TarefasProps){

    const cardsConcluidos = cards.filter(card => card.concluido === true)
    
    return (
        <main className="flex flex-col flex-grow-0 h-auto gap-3 mt-7 overflow">
            {
            cardsConcluidos.map(card =>
                <Card onClick={abrir} key={card.id} card={card} concluir={concluir}/>
            )
            }
        </main>
    )
}