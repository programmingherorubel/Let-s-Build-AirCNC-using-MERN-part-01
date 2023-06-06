import React, { useState } from 'react';
import Container from '../extra/Container';
import Heading from '../Heading/Heading';
import RoomInfo from '../RoomInfo/RoomInfo';
import RoomReservation from '../ShortComponents/RoomReservation';
import Button from '../Button/Button';
import { useParams } from 'react-router-dom';
import { getRoom } from '../api/addRooms';

const RoomDetails = () => {
    const [singledata,setSingleData] = useState({})
    const {detail} = useParams()
    getRoom(detail)
    .then(data => {
        setSingleData(data)
    })
    const {location,image,dateRange,price,category,_id} = singledata
    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <Heading singledata={singledata} title='This Is Title' subtitle='subtitle' />
                    <img src={image} alt="" />
                    <div className='w-full overflow-hidden rounded-xl'>
                        <img className='object-cover w-full' src="" alt="" />
                    </div>
                   <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                   <RoomInfo singledata={singledata} />
                   <div className='mb-10 md:col-span-3 order-first md:order-last'>
                    <RoomReservation singledata={singledata} />
                    <hr />
                    <Button label="Reverse"></Button>
                    <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
                        <div>Total</div>
                        <div>$ 400</div>
                    </div>
                   </div>
                   </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;