export const ListaMenssagen = ({ pergunta }) => {
    return(
        <div>
            {pergunta.map((mensagem) => (
                <div>{mensagem.id}</div>
            ))}
        </div>
    )
}