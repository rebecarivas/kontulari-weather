import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    border-top: 0.4px solid #000000;  
    margin-top: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #0d303d;
    color: #f4f1de;
    width: 100%;
    min-height: 8.5vh;
    
`
const Footer: React.FC = () => {
    return (
      <Wrapper> 
        <h3>Copyright© 2022 - Weather Forecast</h3>
      </Wrapper> 
    )
}

export default Footer;