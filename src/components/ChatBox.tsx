import { useState } from "react";
import { JSX } from "react/jsx-runtime";

interface ChatBoxProps {
  onEnviarMensagem: (texto: string) => void;
  desabilitado?: boolean;
}

export const ChatBox = ({onEnviarMensagem, desabilitado = false,}: ChatBoxProps): JSX.Element => {
const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texto = inputValue.trim();
    if (!texto) return;
    onEnviarMensagem(texto);
    setInputValue("");
  };


  return (
    <div className="border border-gray-300/80 p-4">
      <form
        className="flex space-x-3 border-t border-gray-300 rounded-full"
        onSubmit={handleSubmit}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Digite sua pergunta sobre receitas..."
          disabled={desabilitado}
          className="flex-1 px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 outline-none focus:ring-offset-2
           focus:ring-offset-gray-400 transition-colors disabled:bg-gray-200 disabled:text-gray-500"
        />
        <button
          type="submit"
          disabled={desabilitado || !inputValue.trim()}
          className="px-8 py-3 bg-linear-to-r from-purple-300 to-emerald-400 text-white rounded-full hover:from-purple-400 hover:to-emerald-500
           transition-colors disabled:opacity-50 disabled:cursor-not-allowed enabled:cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
