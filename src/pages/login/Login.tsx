import Home from "../home/Home";
import { useState } from "react";

function Login() {

  const [islogged, setIsLogged] = useState(false);

  return (
    <>
      {
        islogged ? (
          < Home
          titulo="Título da Postagem"
          texto="Texto da Postagem."
           />
      ):(
        <div>
          <h1>Componente Login</h1>
          <button onClick={() => setIsLogged(true)}>Entrar</button>
        </div>
      )
      }
    </>
  )
}

export default Login

