import Card from "./Card";

interface TarefasProps{
    abrir: () => void
    cards: ICard[]
    onMoveToCompleted: (card: string) => void
    onComplete: (card: string) => void
}

export default function TarefasConcluidas({abrir, cards, onComplete, onMoveToCompleted }: TarefasProps){
    return (
        <main className="flex flex-col flex-grow-0 h-auto gap-3 mt-7 overflow">
            {
            cards.map(card => card.concluido ?
                <Card onClick={abrir} key={card.id} card={card} onComplete={onComplete} onMoveToCompleted={onMoveToCompleted} completed={true}/>
                : '')
            }        </main>
    )
}