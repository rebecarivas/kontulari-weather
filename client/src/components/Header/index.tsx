import React from 'react';
import Logo from '../../images/logokontulari.png'
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center
`
const IMG = styled.img`
    width: 100px 
`
const Title = styled.h1`
    font-family: Roboto
`
const Header: React.FC = () => {
    return(
        <Wrapper>
            <IMG src={Logo} alt="Logo Kontulari" />
            <Title>WEATHER FORECAST</Title>
        </Wrapper>
    )
}

export default Header; 