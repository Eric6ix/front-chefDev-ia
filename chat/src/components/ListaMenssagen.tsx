import { JSX } from "react/jsx-runtime";
import { Menssagem } from "./Menssagem";
import { useEffect, useRef } from "react";

interface Menssagem {
  id: number;
  texto: string;
  remetente: "usuario" | "ia";
}

interface ListaMensagensProps {
  pergunta: Menssagem[];
  loading: boolean;
}

export const ListaMenssagen = ({ pergunta, loading }: ListaMensagensProps): JSX.Element => {
  const MsgRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    MsgRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [pergunta]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {pergunta.map((p) => (
        <Menssagem key={p.id} pergunta={p} loading={loading} />
      ))}
      {loading && (
        <div className="flex justify-start animmate-">
          <div className=" bg-gray-50 rounded-2xl rounded-lg-none shadow-md border-gray-200">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200" />
            </div>
          </div>
        </div>
      )}
      <div ref={MsgRef}></div>
    </div>
  );
};
