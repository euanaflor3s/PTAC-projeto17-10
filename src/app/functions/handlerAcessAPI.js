'use server'
const url = "https://aula-17-10-eight.vercel.app";

const getUserAuthenticated = async (userLogin) => {
    
const responsepOfapi = await fetch(url + "/user/authenticated", 
{
    method:"POST",
    headers:{"content-Type": "application/json"},
    body: JSON.stringify(userLogin)
}
);


const userAuth = await responsepOfapi.json();
return userAuth;
}

const getUsers = async () =>{
    const responsepOfApi = await fetch(url + "/users", {cache:"no cache"})
    const useAuth = await responsepOfApi.json();
    return useAuth;
}

const postUser = async (user) => {
    try {
        const responsepOfApi = await fetch(url + "/user", {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(user)
        });

        const userSave = await responsepOfApi.json();
        return userSave;
    } catch {

        return null;
    }
};

export { getUsers, getUserAuthenticated, postUser };