import Link from "next/link"
export default async function Listar({users}){
    await new Promise((resolve) => setTimeout(resolve,4000));
    return(

        <div>
            {users?.map((user, index)=>
            <p key={index}>
                <Link href={`/pages/alterar/${user.id}`}> {user.nome} 
            
            </Link></p> 
            )}
        </div>
  )

}


      
        

