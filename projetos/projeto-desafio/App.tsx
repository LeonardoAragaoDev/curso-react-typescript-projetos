import React, { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState<string>("");
  const nomeRef = React.useRef<HTMLInputElement>(null);
  const [ano, setAno] = useState<number>(0);
  const [resultado, setResultado] = useState<string>("");

  function calcularIdade(event: React.FormEvent) {
    event.preventDefault();
    let validacaoNome = "Nome inválido:";
    let validacaoAno = "Ano inválido:";

    if (ano === null) {
      setResultado(`${validacaoAno} preencha o campo ano`);
      return;
    }

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - ano;
    let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let nomeContemNumero = nome
      .split("")
      .some((letra) => listaNumeros.includes(Number(letra)));

    if (nome === "") {
      setResultado(`${validacaoNome} preencha o campo nome`);
      return;
    }

    if (nome.length < 3) {
      setResultado(
        `${validacaoNome} digite um nome com pelo menos 3 caracteres`
      );
      return;
    }

    if (nomeContemNumero) {
      setResultado(`${validacaoNome} digite um nome sem números`);
      return;
    }

    if (ano < 1900 || ano > anoAtual) {
      setResultado(`${validacaoAno} digite um ano entre 1900 e o ano atual`);
      return;
    }

    let nomeAno = idade > 1 ? "anos" : "ano";
    setResultado(`${nome} você tem ${idade} ${nomeAno}`);
    setNome("");
    setAno(0);

    nomeRef.current?.focus();
  }

  return (
    <div className="container">
      <h1>Descubra sua idade</h1>
      <form onSubmit={calcularIdade}>
        <h4>
          Campos com <span>*</span> são obrigatórios
        </h4>

        <label htmlFor="nome">
          Digite seu nome <span>*</span>
        </label>
        <input
          type="text"
          id="nome"
          placeholder="Digite o seu nome..."
          autoComplete="false"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          ref={nomeRef}
        />

        <label htmlFor="ano">
          Digite o ano que nasceu <span>*</span>
        </label>
        <input
          type="number"
          minLength={4}
          maxLength={4}
          placeholder="Digite o ano que nasceu..."
          autoComplete="false"
          value={ano}
          onChange={(e) => setAno(Number(e.target.value))}
        />

        <button type="submit">Descobrir idade</button>
      </form>

      {resultado && <h3>{resultado}</h3>}
    </div>
  );
}

export default App;
