import { JSX } from "react/jsx-runtime";

interface Mensagem {
  id: number;
  texto: string;
  remetente: "usuario" | "ia";
}

export const Menssagem = ({ pergunta }: { pergunta: Mensagem }): JSX.Element => {
  const isIA = pergunta.remetente === "ia";

  return (
    <div className={`flex ${isIA ? "justify-start" : "justify-end"}`}>
      <div
        className={
          "max-w-xs lg:max-w-md px-4 py-3 shadow-lg cursor-pointer select-text transition-transform active:scale-[0.99] hover:shadow-xl " +
          (isIA
            ? "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md bg-gray-50 text-gray-900 border border-gray-300 "
            : "rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl bg-gradient-to-r from-purple-300 to-emerald-400 text-white border border-white/30")
        }
      >
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {pergunta.texto}
        </p>
      </div>
    </div>
  );
};

