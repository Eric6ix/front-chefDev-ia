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
          "max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg cursor-pointer select-text transition-transform active:scale-[0.99] hover:shadow-xl"
        }
        style={{
          background: isIA
            ? "linear-gradient(135deg, rgba(249,250,251,1) 0%, rgba(243,244,246,1) 100%)"
            : "linear-gradient(135deg, rgba(216,180,254,0.95) 0%, rgba(167,243,208,0.95) 100%)",
          color: isIA ? "#111827" : "white",
          border: isIA
            ? "1px solid rgba(209,213,219,1)"
            : "1px solid rgba(255,255,255,0.25)",
          borderBottomLeftRadius: isIA ? "0.25rem" : "1.25rem",
          borderBottomRightRadius: isIA ? "1.25rem" : "0.25rem",
          borderTopLeftRadius: isIA ? "1.25rem" : "0.25rem",
          borderTopRightRadius: isIA ? "0.25rem" : "1.25rem",
        }}
      >
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {pergunta.texto}
        </p>
      </div>
    </div>
  );
};
