import "./App.css";
import { FormEvent, useState } from "react";
import logoImg from "./assets/logo.png";

interface IntoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

export default function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<IntoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = alcoolInput / gasolinaInput;
    console.log(calculo);

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    }
  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <div>
      <main className="container">
        <img src={logoImg} alt="Logo da calculadora de gasolina ou álcool" />
        <h1 className="title">Qual a melhor opção?</h1>

        <form onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input
            type="number"
            className="input"
            placeholder="4,9"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro):</label>
          <input
            type="number"
            className="input"
            placeholder="4,9"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input type="submit" className="button" value="Calcular" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>
            <span>Gasolina {info.gasolina}</span>
            <span>Álcool {info.alcool}</span>
          </section>
        )}
      </main>
    </div>
  );
}
