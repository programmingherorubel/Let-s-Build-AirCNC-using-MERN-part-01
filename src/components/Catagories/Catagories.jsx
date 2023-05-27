import React from 'react';
import Container from '../extra/Container';
import {categories} from '../../../public/categoriesData'
import CategoriesBox from './CategoriesBox';

const Catagories = () => {
    return (
        <Container>
            <div className="pt-4 flex justify-between items-center flex-row overflow-x-auto">
                {
                    categories.map(item => <CategoriesBox label={item.label} icon={item.icon} key={item.label}></CategoriesBox>)
                }
            </div>
        </Container>
    );
};

export default Catagories;