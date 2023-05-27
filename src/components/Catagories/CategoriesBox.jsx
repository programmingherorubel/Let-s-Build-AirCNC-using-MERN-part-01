import React from 'react';
import { useSearchParams } from 'react-router-dom';

const CategoriesBox = ({label,icon:Icon,}) => {
    const [params,setParams] = useSearchParams()
    const value = params.get('category')
    
    return (
        <div className='flex flex-col justify-center items-center gap-3 p-3 bottom-2 hover:text-neutral-800 border-transparent text-neutral-500'>
            <Icon size={26}  />
            <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default CategoriesBox;