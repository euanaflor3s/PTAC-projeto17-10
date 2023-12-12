'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../../global.css"
import { useRouter } from "next/navigation";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '@/app/functions/handlerAcessAPI';

export default function Alterar({params}) {

  const [user,setUser] = useState({
    name:'',
    email:'',
    password:'',
   });

   const {push} =useRouter()
 
   const handlerLogin = async (e) => {
      e.preventDefault();  // cancelar um evento

      try{
        await updateUser(user, params.id);

        await new Promise((resolve) => {
          toast.success("Usuário alterado!")
          setTimeout(resolve, 5000)
        })

        return push("/pages/dashboard")
      }
      
      catch{
        return toast.error("Usuário não foi alterado!")
      }
   }
    
    return (
      <div className="body">
        <h1>Página para alterar usuário</h1>
        <form onSubmit={handlerLogin}>
  
    <div className= "ana">
        <input  placeholder='nome' type="name" className= "inputs" required onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
         
          </div>
  
          <div className= "ana">
          <input  placeholder='E-mail' type="email" className= "inputs" required onChange={(event) => { setUser({ ...user, email: event.target.value }) }} />
         
    </div>
  
    <div className= "ana">
          <input placeholder='Senha'  type='password' className= "inputs" required onChange={(event) => { setUser({ ...user, password: event.target.value }) }} />
       
          </div>
  
          <button className='entrar' type='submit'>Alterar</button> <button className='voltar'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
          
        </form>
        <ToastContainer/>
      </div>
    )
  }

