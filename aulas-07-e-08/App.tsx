import { useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();
  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade,
    });
  }

  function adicionar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function subtrair() {
    if (contador == 0) {
      return;
    }

    setContador((valorAtual) => valorAtual + 1);
  }

  return (
    <div>
      <h1>Conhecendo useState</h1>
      <input
        type="text"
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Digite a idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <br />
      <br />
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr />
      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h4>Idade: {infoAluno?.idade}</h4>
      <hr />
      <br />
      <h1>Contador</h1>
      <button onClick={adicionar}>+</button> {contador}{" "}
      <button onClick={subtrair}>-</button>
    </div>
  );
}
