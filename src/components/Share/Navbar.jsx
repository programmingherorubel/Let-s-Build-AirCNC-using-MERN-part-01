import React from 'react';
import Container from '../extra/Container'
import Logo from '../ShortComponents/Logo';
import Search from '../Search/Search'
import MenuDropdown from '../MenuDropdown/MenuDropdown'

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white shadow-sm z-10'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row item-center justify-between gap-3 md:gap-0'>
                        <Logo />
                        <Search/>
                        <MenuDropdown/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;