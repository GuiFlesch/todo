import { FiSettings } from 'react-icons/Fi'

export default function Header(){
    return (
    <header className="flex flex-col">
        <ul className="flex justify-between pt-3 px-3">
            <li>Foto</li>
            <li>Logo</li>
            <li><FiSettings size={22}/></li>
        </ul>
        <nav>
           <ul className="flex justify-around pt-10 pb-4 border-b-2">
            <li>Tarefas</li>
            <li>Concluídas</li>
            </ul>
        </nav>
    </header>
    )
}