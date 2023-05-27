import React, { useContext } from 'react';
import avator from '../../assets/images/placeholder.jpg'
import { AuthContext } from '../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)
    const img = user?.photoURL
    return (
        <>
            
            <img src={img || avator} alt="" width='30px' height='30px' className='rounded-full' />
            
        </>
    );
};

export default Avatar;