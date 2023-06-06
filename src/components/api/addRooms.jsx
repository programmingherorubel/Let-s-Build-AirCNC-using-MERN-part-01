export const addRooms =async (rooms)=>{
    const responce = await fetch(`http://localhost:5000/rooms`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(rooms)
    })
    const data = await responce.json()
    return data
}

export const addRoomms = async()=>{
    const responce = await fetch('http://localhost:5000/rooms')
    const data = await responce.json()
    return data
}

export const getRoom = async(id)=>{
    const responce = await fetch(`http://localhost:5000/rooms/${id}`)
    const data = await responce.json()
    return data
} 