interface ModalCardProps {
    isOpen: boolean;
    aoFechar: () => void;
  }

export default function ModalCard({isOpen, aoFechar}: ModalCardProps){

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
              <form action="">
                <div className="flex w-full mx-auto">
                  <textarea className="flex mx-auto text-emerald-950 mt-5 h-32 w-[90%] bg-gray-100 outline-none rounded-lg"></textarea>
                </div>
    
                <div className="flex justify-center gap-1 mx-auto w-[90%] py-2">
                  <input
                    type="submit"
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
                    className="flex w-full mx-auto rounded-md py-1 mb-2"
                    name=""
                    id=""
                  >
                    <option value="">Duração</option>
                    <option value="15">15 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="45">45 minutos</option>
                    <option value="60">1 hora</option>
                    <option value="120">2 horas</option>
                  </select>
                  <select
                    className="flex m-auto rounded-md py-1 mb-2 focus:outline-none"
                    name=""
                    id=""
                  >
                    <option className="w-[90%]" value="">
                      Dificuldade
                    </option>
                    <option className="" value="">
                      Fácil
                    </option>
                    <option className="" value="">
                      Médio
                    </option>
                    <option className="" value="">
                      Difícil
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        );
      } else {
        return null;
      }
}