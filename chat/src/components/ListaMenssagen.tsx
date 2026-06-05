import { JSX } from "react/jsx-runtime";
import { Menssagem } from "./Menssagem";

interface Menssagem {
  id: number;
  texto: string;
  remetente: "usuario" | "ia";
}

interface ListaMensagensProps {
  pergunta: Menssagem[];
}

export const ListaMenssagen = ({ pergunta }: ListaMensagensProps): JSX.Element => {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {pergunta.map((p) => (
                <Menssagem key={p.id} pergunta={p} />
            ))}
        </div>
    );
}

