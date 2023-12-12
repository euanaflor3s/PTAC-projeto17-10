'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./global.css"

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh} = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Ocorreu um erro no email ou senha!")
      }
      push('/pages/dashboard');
    } catch {
      refresh(); //tualiza a página se ocorrer algum erro no try ou no catch
    }
  }
  return (
    <body>

    <div className="body">

      <form onSubmit={handlerLogin}>

      <div>

      </div>

      
      <h1>TELA DE LOGIN</h1>


      <div className="ana">

        <input className="input"
          placeholder='Insira seu E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>

        </div>

        <div className="ana">

        <input className="input"
          placeholder='Insira sua senha'
          type='password'
          onChange={(e) => { setUser({ ...user,     password: e.target.value }) }}/>

        </div>

      

        <br></br>

        <button className="btn">Entrar</button>

        
      </form>
      <ToastContainer/>
    </div>
    </body>
  );
}