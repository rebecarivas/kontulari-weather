import React from 'react';
import Logo from '../../images/logokontulari.png'

const Header: React.FC = () => {
    return(
        <>
            <img src={Logo} alt="Logo Kontulari" />
            <h1>WEATHER FORECAST</h1>
        </>
    )
}

export default Header; 