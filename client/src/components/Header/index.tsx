import React from 'react';
import Logo from '../../images/logokontulari.png';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    border-bottom: 0.4px solid #000000; 
    margin-bottom: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #0d303d;
    color: #f4f1de;
    min-height: 20vh;
    img{
        width: 100px 
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