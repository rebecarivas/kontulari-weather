import React, { useState } from 'react';
import Logo from '../../images/LOGO.png';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    img{
        width: 85px;
    }
    div{
      width: 85%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      @media screen and (max-width: 600px) {
          justify-content: center;
      }
    }
    label{
      width: 40px;
      height: 20px;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-color: var(--green);
    }  
      input{
        height: 100%;
        width: 100%;
        opacity: 0
      }
      span{
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 1rem;
        background-color: var(--blue);
        left: 0;
        cursor: pointer;
        transition: 0.2s;
      }
      input:checked + span {
        left: 50%;
        background-color: var(--gray1)
      }

`
export interface Props {
    toggleTheme(): void;
  }    

const Header: React.FC<Props> = ({toggleTheme}) => {
    const [checked, setChecked] = useState(false);
    const handleChecked = () => {
      setChecked(checked => !checked)
    }
    return(
        <Wrapper>
            <img src={Logo} alt="Logo Kontulari" />
            <h1>WEATHER FORECAST</h1>
                <div>
                    <h4>LIGHT MODE</h4>
                    <label onChange={toggleTheme} onClick={handleChecked}>
                        <input type="checkbox"/>
                        <span />
                    </label>
                </div>
        </Wrapper>
    )
}

export default Header;