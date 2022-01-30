import React from 'react';
import styled from 'styled-components';
import FooterLogo from '../../images/footerKontulari.png'

const Wrapper = styled.div`
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: auto;
    background-color: var(--blue);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* min-height: 8.5vh; */
    div{
      width: 70%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
    img{
      width: 150px;
      @media screen and (max-width: 600px){
        width: 100px;
    }
    }
    
`
const Footer: React.FC = () => {
    return (
      <Wrapper> 
        <div>
          <img src={FooterLogo} alt="logo kontulari"/>
          <h4>Dark mode</h4>
        </div>
      </Wrapper> 
    )
}

export default Footer;