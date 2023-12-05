'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../global.css"
import { useRouter } from "next/navigation";
import { ToastContainer } from 'React-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default alterar ({params}){

  const [user,setUser] = useState({
    name:'',
    email:'',
    password:'',
   });

   const {push} =useRouter()
 
   const handlerLogin = async (e) => {
      e.preventDefault();  // cancelar um evento
      toast.success('Alterado com sucesso')
    }
    
    return (
      <div className="body">
        <h1>Página para alterar usuário</h1>
        <form onSubmit={handlerLogin}>
  
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
  
          <button className='entrar'>Alterar</button> <button className='voltar'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
          
        </form>
        <ToastContainer/>
      </div>
    )
  }

