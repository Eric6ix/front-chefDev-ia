import { JSX } from "react/jsx-runtime";

interface Mensagem {
  id: number;
  texto: string;
  remetente: "usuario" | "ia";
}

interface ListaMensagensProps {
  pergunta: Mensagem[];
}

export const ListaMenssagen = ({ pergunta }: ListaMensagensProps): JSX.Element => {
    return(
        <div>
            {pergunta.map((mensagem) => (
                <div key={mensagem.id}>{mensagem.id}</div>
            ))}
        </div>
    )
}
