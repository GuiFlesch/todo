import Header from "@/components/Header";
import Tarefas from "@/components/Tarefas";
import Modal from "@/components/Modal";
import Pagina from "@/components/Pagina";
import { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import ModalCard from "@/components/ModalCard";
import TarefasConcluidas from "@/components/TarefasConcluidas";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalCard, setOpenModalCard] = useState<boolean>(false);
  const [cards, setCards] = useState<ICard[]>([])
  const [completedCards, setCompletedCards] = useState<ICard[]>([])

  const adicionarCard = (card: ICard) => {
    setCards([...cards, card])
  }

  const moveToCompleted = (taskId: string) => {
    setCompletedCards(prevCompletedCards => prevCompletedCards.filter(card => card.id !== taskId));
  };

  const handleComplete = (taskId: string) => {
    setCards(prevCard =>
      prevCard.map(card =>
        card.id === taskId ? { ...card, completed: true } : card
      )
    );
  };

  function fechaModal() {
    setOpenModal(!openModal);
  }

  function fechaModalCard() {
    setOpenModalCard(!openModalCard);
  }

  function abrirModal(){
    setOpenModalCard(true)
  }

  return (
    <Pagina>
      <>
        <Header />
        <Tarefas abrir={abrirModal} cards={cards} onComplete={handleComplete} onMoveToCompleted={moveToCompleted}/>
        <TarefasConcluidas abrir={abrirModal} cards={completedCards}  onComplete={handleComplete} onMoveToCompleted={moveToCompleted}/>
        <Modal isOpen={openModal} aoFechar={fechaModal} aoCardCadastrado={card => adicionarCard(card)} />
        <ModalCard isOpen={openModalCard} aoFechar={fechaModalCard} />
        <button
          className={`lg:hidden fixed right-10 bottom-16 bg-cyan-700 p-7 rounded-full`}
          onClick={() => setOpenModal(true)}
        >
          <BsPencilFill size={20} />
        </button>
      </>
    </Pagina>
  );
}
