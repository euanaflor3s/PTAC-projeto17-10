import Link from "next/link"
import { getUsers } from "../functions/handlerAcessAPI";


export default async function Listar(){
    const users = await getUsers();
    await new Promise((resolve) => setTimeout(resolve,4000));
    return(

        <div>
            {users?.map((user, index)=>
                <Link href={`/pages/alterar/${user.id}`}> 
                   <p key={index}>
                     {user.name} 
                   </p>
            </Link>
            )}
        </div>
  )

}


      
        

