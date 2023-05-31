import React from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

const CategoriesBox = ({label,icon:Icon,}) => {
    const [params,setParams] = useSearchParams()
    const value = params.get('category')
   
    const navigate = useNavigate()

    const handelClick = ()=>{
        let currentQuerry = {}
        if(params){
            currentQuerry = queryString.parse(params.toString())
        }
        const updateQuerry = {
            ...currentQuerry,
            category:label
        }

        const url = queryString.stringifyUrl({
            url:'/',
            query:updateQuerry
        },
        {
            skipNull:true
        })
        navigate(url)
    }
    
    
    return (
        <div onClick={handelClick} className='flex flex-col justify-center items-center gap-3 p-3 bottom-2 hover:text-neutral-800 border-transparent text-neutral-500'>
            <Icon size={26}  />
            <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default CategoriesBox;