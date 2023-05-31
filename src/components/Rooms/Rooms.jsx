import React, { useContext, useEffect, useState } from 'react';
import Container from '../extra/Container';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { AuthContext } from '../../providers/AuthProvider';
import { useSearchParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NoData from '../extra/NoData';
import Heading from '../Heading/Heading';

const Rooms = () => {
    const {loading} = useContext(AuthContext)
    const [rooms,setRooms] = useState([])
    const [params,setParams] = useSearchParams() //3.13 minutes
    const category = params.get('category')
   
  

    useEffect(()=>{
        fetch('rooms.json')
        .then(res => res.json())
        .then(data => {
            if(category){
                const filterData = data.filter(ctrgry => ctrgry.category === category)
                setRooms(filterData)
            }else{
            setRooms(data)
        }
        })
    },[category])

    if(loading){
        return <Loader/>
    }

    return (
        <Container>
            {
                rooms.length > 0 ? <div className='pt-5 gap-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {
                    rooms.map(room => <Card room={room} key={room.image}></Card>)
                }
            </div>
            :
            <Heading title='No Data Found' center='center'/>
            }
            
        </Container>
    );
};

export default Rooms;