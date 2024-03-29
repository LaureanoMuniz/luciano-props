import React from 'react';
import './Header.css';

function HeaderButton({ text, no, onClick }) {
    const handleClick = () => {
        onClick(); // Llama a la función onClick pasada como prop
    };

    return (
        <div className={`header-button left-${no}`} onClick={handleClick}>
            {text}
        </div>
    );
}

export default HeaderButton;