import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link';
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import "../../global.css"

export default async function Dashboard() {

    const users = await getUsers();
    return (
        <div> 

<h1 className="h1">Usuários cadastrados </h1>

            <div className="body">
                <Suspense fallback={ <p className="carrega"> Carregando pagina...</p> }>
                    {users?.map((user, index)=>
                        <Link href={`/pages/alterar/${user.id}`}> 
                        <p key={index}>
                            {user.name} 
                        </p>
                    </Link>
                    )}
                </Suspense>
            </div>
        </div>
    );
};