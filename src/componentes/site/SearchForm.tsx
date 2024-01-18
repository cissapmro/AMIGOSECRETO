import { escapeCpf } from "@/utils/escapeCpf";
import { useState } from "react";

type Props = {
    onSearchButton: (cpf: string) => void
}

export const SearchForm = ({ onSearchButton}: Props) => {

    const [cpfInput, setCpfInput] = useState('');


    return(
        <div>
            <p className="mb-3 text-3xl">Digite o Cpf</p>
            <input 
            type="text"
            placeholder="Digite o seu cpf"
            autoFocus
            inputMode="numeric"
            value={cpfInput}
            onChange={(e) => escapeCpf(e.target.value)}
            className="bg-white text-black text-center rounded outline-none w-full"
            />
            <button className="w-full text-white p-3 bg-blue-900 rounded-lg text-4xl mt-3 border-blue-400" onClick={() => onSearchButton(cpfInput)}
            >Enviar</button>
        </div>
    )
}
export default SearchForm;