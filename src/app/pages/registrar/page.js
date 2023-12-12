'use client'
import { postUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import "../../global.css"


export default function Registrar() {
    const [user, setUser] = useState({
      name: '',
      email: '',
      senha: '',
    });

    const { push } = useRouter();

    const handlerFormSubmit = async (event) => {
      event.preventDefault();
      try {
        await postUser(user);
        await new Promise((resolve) =>{
        toast.success("Usuário registrado")
        setTimeout(resolve, 5000)
       })
       return push("/pages/dashboard");
      } catch {
        return toast.error("Erro");
      }
    };


  return (
    <div className="body">
      <h1>Página de registro</h1>
      <form onSubmit={handlerFormSubmit }>   

  <div className= "sla">
      <input  placeholder='nome' type="name" className= "inputs" required onChange={(event)=> {setUser({...user, name: event.target.value})}} />
        </div>

        <div className= "sla">
        <input  placeholder='E-mail' type="email" className= "inputs"  required onChange={(event)=> {setUser({...user, email: event.target.value})}}/>
  </div>

  <div className= "sla">
        <input placeholder='Senha'  type='password' className= "inputs"  required onChange={(event)=> {setUser({...user, password: event.target.value})}} />
        </div>

        <button className='entrar'>Registrar</button>
        <button className='voltar'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
}


