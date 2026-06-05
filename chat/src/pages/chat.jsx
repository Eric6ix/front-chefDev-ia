import { useState } from "react";

export const Chat = () => {
  const [pergunta, setPergunta] = useState([
    {
      id: 1,
      texto: "Qual é a capital da França?",
      remetente: "usuario",
    },
    {
      id: 2,
      texto: "A capital da França é Paris.",
      remetente: "ia",
    }
  ]);

  
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-500 via-gray-50 to-emerald-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
         
          <h1 className="text-5xl font-bold bg-linear-to-r bg-purple-600 to-emerald-600 text-transparent bg-clip-text">Inteligência ártificial</h1>
          <p className="text-gray-600 text-lg ">Pergunte alguma coisa!</p>
        
        </header>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl">
          
        </div>

      </div>
    </div>
  );
};
