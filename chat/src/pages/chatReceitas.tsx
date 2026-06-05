import { useState } from "react";
import { ListaMenssagen } from "../components/ListaMenssagen";
import { JSX } from "react/jsx-runtime";
import { ChatBox } from "../components/ChatBox";
import { api } from "../services/api.ts";



interface Mensagem {

  id: number;
  texto: string;
  remetente: "usuario" | "ia";
}

export const ChatReceitas = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [pergunta, setPergunta] = useState<Mensagem[]>([
    {
      id: 1,
      texto: "Bem-vindo(a) qual sua vontade hoje?",
      remetente: "ia",
    },
  ]);

  const onEnviarMensagem = async (pergunta: string) => {
    try {
      const resposta = await api.post("/receitas", { pergunta });
      console.log(pergunta);
      console.log("Resposta da API:", resposta.data);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-300 via-gray-50 to-emerald-100 p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-linear-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text">
            Dev Chef - IA | Seu Assistente de Receitas Inteligente
          </h1>
          <p className="text-gray-600 text-lg ">Me pergunte uma receita 🎂</p>
        </header>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl flex flex-col h-[70vh] border border-gray-300">
          <ListaMenssagen pergunta={pergunta} />
          <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />
        </div>
      </div>
    </div>
  );
};
