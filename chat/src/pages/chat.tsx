import { useState } from "react";
import { ListaMenssagen } from "./components/ListaMenssagen";
import { JSX } from "react/jsx-runtime";

interface Mensagem {
  id: number;
  texto: string;
  remetente: "usuario" | "ia";
}

export const Chat = (): JSX.Element => {
  const [pergunta, setPergunta] = useState<Mensagem[]>([
    {
      id: 1,
      texto: "Qual é a capital da França?",
      remetente: "usuario",
    },
    {
      id: 2,
      texto: "A capital da França é Paris.",
      remetente: "ia",
    },
  ]);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-500 via-gray-50 to-emerald-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-linear-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text">
            Dev Chef - IA | Seu Assistente de Receitas Inteligente
          </h1>
          <p className="text-gray-600 text-lg ">Me pergunte uma receita 🎂</p>
        </header>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl">
          <ListaMenssagen pergunta={pergunta} />
        </div>
      </div>
    </div>
  );
};
