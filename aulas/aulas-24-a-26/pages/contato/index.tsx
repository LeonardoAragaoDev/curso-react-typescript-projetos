import { Link } from "react-router-dom";

export function Contato() {
  return (
    <div>
      <h1>Bem vindo a página contatos!</h1>
      <h3>Telefone: (XX) XXXXX-XXXX</h3>

      <hr />

      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/">Ir para home</Link>
    </div>
  );
}
