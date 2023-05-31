import React from 'react';
import Container from '../extra/Container';
import Heading from '../Heading/Heading';
import RoomInfo from '../RoomInfo/RoomInfo';
import RoomReservation from '../ShortComponents/RoomReservation';
import Button from '../Button/Button';

const RoomDetails = () => {
    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <Heading title='This Is Title' subtitle='subtitle' />
                    {/* img  */}
                    <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                        <img className='object-cover w-full' src="" alt="" />
                    </div>
                   <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                   <RoomInfo/>
                   <div className='mb-10 md:col-span-3 order-first md:order-last'>
                    <RoomReservation/>
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