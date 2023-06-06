import React, { useContext, useState } from 'react';
import AddRoomForm from './AddRoomForm';
import { imagUpload } from '../../api/utils';
import { AuthContext } from '../../../providers/AuthProvider';
import { addRooms } from '../../api/addRooms';
import { toast } from 'react-hot-toast';

const AddRoom = () => {
   const [loading,setLoading] = useState(false)
   const {user}= useContext(AuthContext)
   const [dates,setDates] = useState({startDate: new Date(),
    endDate: new Date(),
    key: 'selection'})
    const handelSubmit = e =>{
        
        e.preventDefault()
        setLoading(true)
        const location = e.target.location.value
        const title = e.target.title.value
        const from = dates.startDate
        const to = dates.endDate
        const price = e.target.price.value
        const guests = e.target.total_guest.value
        const bedrooms = e.target.bedrooms.value
        const bathrooms = e.target.bathrooms.value
        const description = e.target.description.value
        const category = e.target.category.value
            const image = e.target.image.files[0]
        console.log(image)
            imagUpload(image)
            .then(data =>{
                const imgUrl = data.data.display_url
                const roomData = {
                    location,
                    title,
                    from,
                    to,
                    price: parseFloat(price),
                    guests,
                    bedrooms,
                    bathrooms,
                    description,
                    image: imgUrl,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                    },
                    category,
                }
                addRooms(roomData).then(data => {
                    if(data.acknowledged){
                        toast.success('data inserted successfull')
                    } 
                })
                setLoading(false)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    const handleDates = (ranges)=>{
        setDates(ranges.selection)
    }

    return (
        <AddRoomForm  handelSubmit={handelSubmit}loading={loading} dates={dates} handleDates={handleDates}/>
    );
};

export default AddRoom;