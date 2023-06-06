// image upload 
export const imagUpload = async image =>{
    const api_Key = `5528744d6a1a320dde7b1fb03bf1f442`
    const formData = new FormData()
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${api_Key}`
    const responce = await fetch(url,{
        method:'POST',
        body:formData
    })
    const data =await responce.json()
    return data 


} 
