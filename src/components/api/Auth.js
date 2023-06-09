// save user to database 
export const saveUser = (user)=>{
    const currentuser = {
        email:user.email
    }
    fetch(`http://localhost:5000/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentuser)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

export const becomeHost  = email =>{
    const currentUser = {
        role:'host'
    }
    
    return  fetch(`http://localhost:5000/users/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => data)
    }
 
// get role 
export const getRole =async email =>{
    const responce = await fetch(`http://localhost:5000/users/${email}`)
    const user = await responce.json()
    return user?.role
}