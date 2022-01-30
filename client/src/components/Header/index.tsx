import React from 'react';
import Logo from '../../images/logokontulari.png';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: var(--blue);
    /* min-height: 20vh; */
    width: 100%;
    img{
        width: 100px; 
    }
`
const Header: React.FC = () => {
    return(
        <Wrapper>
            <img src={Logo} alt="Logo Kontulari" />
            <h1>WEATHER FORECAST</h1>
        </Wrapper>
    )
}

export default Header;