import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface ModalProps {
  isOpen: boolean;
  aoFechar: () => void;
  aoCardCadastrado: (card: ICard) => void
}

export default function Modal({ isOpen, aoFechar, aoCardCadastrado }: ModalProps) {

  const [texto, setTexto] = useState('')
  const [tempo, setTempo] = useState('')
  const [dificuldade, setDificuldade] = useState('')
  const [cor, setCor] = useState('')

  const ConverterCor = (dificuldade: string) => {
    if (dificuldade == "Facil"){
      setCor('bg-green-500')
    }
    if (dificuldade == "Medio"){
      setCor('bg-yellow-500')
    }
    if(dificuldade == "Dificil"){
      setCor('bg-red-500')
    }
  }
  
  const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ConverterCor(dificuldade)
    aoCardCadastrado({
      id: uuidv4(),
      texto: texto,
      tempo: tempo,
      dificuldade: dificuldade,
      cor: cor,
      concluido: false
    })
    
    setTexto('')
    setTempo('')
    setDificuldade('')
    aoFechar()
  }

  if (isOpen) {
    return (
      <div
        className="bg-[rgba(0,0,0,0.7)] fixed top-0 bottom-0 right-0 left-0 z-[1000]"
        onClick={aoFechar}
      >
        <div
          className={`
                bg-gray-300 fixed bottom-0 h-[70%] w-full text-black z-1001
                `}
          onClick={(e) => e.stopPropagation()}
        >
          <form action="" onSubmit={aoSalvar}>
            <div className="flex w-full mx-auto">
              <textarea
                value={texto}
                className="flex mx-auto text-emerald-950 mt-5 h-32 w-[90%] bg-gray-100 outline-none rounded-lg"
                onChange={(e) => setTexto(e.target.value)}></textarea>
                
            </div>

            <div className="flex justify-center gap-1 mx-auto w-[90%] py-2">
              <input
                type="submit"
                value="Adicionar"
                className="text-white rounded-md w-full py-2 bg-blue-700"
              />
              <button
                className="text-white rounded-md w-[30%] bg-gray-700"
                onClick={aoFechar}
              >
                Cancelar
              </button>
            </div>
            <div className="flex mx-auto w-[90%] gap-2">
              <select
              value={tempo}
                className="flex w-full mx-auto rounded-md py-1 mb-2"
                name=""
                id=""
                onChange={(e) => setTempo(e.target.value)}
              >
                <option value="">Duração</option>
                <option value="15 minutos">15 minutos</option>
                <option value="30 minutos">30 minutos</option>
                <option value="45 minutos">45 minutos</option>
                <option value="60 minutos">1 hora</option>
                <option value="120 minutos">2 horas</option>
              </select>
              <select
              value={dificuldade}
                className="flex m-auto rounded-md py-1 mb-2 focus:outline-none"
                name=""
                id=""
                onChange={(e) => {
                  setDificuldade(e.target.value)
                  ConverterCor(e.target.value)}}
              >
                <option value="Dificuldade">Dificuldade</option>
                <option className="" value="Facil" >
                  Fácil
                </option>
                <option className="" value="Medio">
                  Médio
                </option>
                <option className="" value="Dificil">
                  Difícil
                </option>
              </select>
            </div>
          </form>
          <div className="flex flex-wrap mx-auto w-[90%] gap-2">
            <button className="bg-gray-100 px-3 border-r-8 border-r-green-500 py-2 rounded-2xl text-emerald-950">
              Lavar a louça
            </button>
            <button className="bg-gray-100 px-3 border-r-8 border-r-red-500 py-2 rounded-2xl text-black">
              Ir no mercado
            </button>
            <button className="bg-gray-100 px-3 border-r-8 border-r-yellow-500 py-2 rounded-2xl text-black">
              trabalho
            </button>
            <button className="bg-gray-100 px-3 border-r-8 border-r-green-500 py-2 rounded-2xl text-black">
              Lavar a louça
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
