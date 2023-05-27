import React, { useContext, useEffect, useState } from 'react';
import Container from '../extra/Container';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { AuthContext } from '../../providers/AuthProvider';
import { useSearchParams } from 'react-router-dom';

const Rooms = () => {
    const {loading} = useContext(AuthContext)
    const [rooms,setRooms] = useState([])
    const [params,setParams] = useSearchParams() //3.13 minutes
    const value = params.get('category')

    useEffect(()=>{
        fetch('rooms.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])

    if(loading){
        return <Loader/>
    }

    return (
        <Container>
            <div className='pt-5 gap-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {
                    rooms.map(room => <Card room={room} key={room.image}></Card>)
                }
            </div>
        </Container>
    );
};

export default Rooms;