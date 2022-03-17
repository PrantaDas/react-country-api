import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h3>This is Header From another folder</h3>
            <nav className='menubar'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About US</a>
            </nav>
        </div>
    );
};

export default Header;