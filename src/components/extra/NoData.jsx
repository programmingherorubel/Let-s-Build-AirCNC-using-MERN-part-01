import React from 'react';
import Container from './Container';

const NoData = () => {
    return (
        <Container>
            <h3 className='text-2xl flex justify-center items-center h-[60vh] font-bold text-cyan-950 text-center'>No Data Found</h3>
        </Container>
    );
};

export default NoData;