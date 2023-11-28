'use client'
import { postUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../global.css"

export default function Registrar() {
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
    });

    const { push } = useRouter();

    const handlerFormSubmit = async (event) => {
      event.preventDefault();
      try {
        await postUser(user);
        return push("/pages/dashboard");
      } catch {
        return toast.error("Erro");
      }
    };


  return (
    <div className="body">
      <h1>Página de registro</h1>
      <form onSubmit={handlerLogin }>   

  <div className= "sla">
      <input  placeholder='nome' type="nome" className= "inputs" >
        </input>
        </div>

        <div className= "sla">
        <input  placeholder='E-mail' type="email" className= "inputs">
        </input>
  </div>

  <div className= "sla">
        <input placeholder='Senha'  type='password' className= "inputs" >
        </input>
        </div>

        <button className='entrar'>Registrar</button>
        <button className='voltar'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
}


