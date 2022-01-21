import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center  
`
const Title = styled.h3`
    font-family: Roboto
`

const Footer: React.FC = () => {
    return (
      <Wrapper> 
        <Title>Copyright© 2022 - Weather Forecast</Title>
      </Wrapper> 
    )
}

export default Footer;