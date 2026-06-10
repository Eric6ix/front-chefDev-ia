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
    // Mensagem inicial da IA padão
    {
      id: 1,
      texto: "Bem-vindo(a)! O que você deseja hoje?",
      remetente: "ia",
    },
  ]);

  const onEnviarMensagem = async (pergunta: string) => {
    const novaMensagemUser: Mensagem = {
      id: Date.now(),
      texto: pergunta,
      remetente: "usuario",
    };

    setPergunta((prev) => [...prev, novaMensagemUser]);
    setLoading(true);

    try {
      const resposta = await api.post("/perguntar", { prompt: pergunta });

      const respostaTexto = resposta?.data?.respostaTexto;

      const textoFormatado =
        typeof respostaTexto === "string"
          ? (() => {
              // Backend vindo com markdown fences (```json ... ```)
              const semFences = respostaTexto
                .replace(/^```[a-zA-Z]*\n?/, "")
                .replace(/```\s*$/, "")
                .replace(/\\n/g, "\n");

              // Se for JSON puro por dentro, transforma em texto “bonito”
              try {
                const obj = JSON.parse(semFences);

                const titulo = obj?.titulo ? `**${obj.titulo}**\n` : "";
                const resumo = obj?.resumo ? `${obj.resumo}\n\n` : "";

                const ingredientes = Array.isArray(obj?.ingredientes)
                  ? `Ingredientes:\n- ${obj.ingredientes.join("\n- ")}\n\n`
                  : "";

                const passoAPasso = Array.isArray(obj?.passo_a_passo)
                  ? `Passo a passo:\n${obj.passo_a_passo
                      .map((p: string, i: number) => `${i + 1}. ${p}`)
                      .join("\n")}\n\n`
                  : "";

                const meta =
                  typeof obj?.tempo_estimado_min !== "undefined" || obj?.dificuldade
                    ? `Tempo estimado: ${obj?.tempo_estimado_min ?? "-"} min\nDificuldade: ${obj?.dificuldade ?? "-"}`
                    : "";

                return [titulo, resumo, ingredientes, passoAPasso, meta]
                  .filter(Boolean)
                  .join("\n");
              } catch {
                // fallback: só garante quebras reais de linha
                return semFences;
              }
            })()
          : JSON.stringify(resposta?.data, null, 2);

      const novaMensagemIA: Mensagem = {
        id: Date.now() + 1,
        texto: textoFormatado,
        remetente: "ia",
      };
      setPergunta((prev) => [...prev, novaMensagemIA]);
    } catch (error) {
      alert("Ocorreu um erro..Gemini instável no momento. Tente novamente mais tarde.");
       const erroMensagem: Mensagem = {
        id: Date.now() + 1,
        texto: "Erro inesperado. Tente novamente mais tarde...💀",
        remetente: "ia",
      };
      setPergunta((prev) => [...prev, erroMensagem]);
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setLoading(false);
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
          <ListaMenssagen pergunta={pergunta} loading={loading} />
          <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />
        </div>
      </div>
    </div>
  );
};

