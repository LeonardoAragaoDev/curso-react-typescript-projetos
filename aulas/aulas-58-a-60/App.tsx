import { useState } from "react";
import Alunos from "./components/alunos";
import UserProvider from "./contexts/user";
import Footer from "./components/footer";

function App() {
  const [nome, setNome] = useState("Sujeito Programador");

  return (
    <UserProvider>
      <div>
        <h1>Escola Dev</h1>
        <br />
        <hr />
        <Alunos />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
