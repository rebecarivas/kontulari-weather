import React, {useState} from 'react';
import styled from 'styled-components';
import FooterLogo from '../../images/footerKontulari.png'

const Wrapper = styled.div`
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: auto;
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* min-height: 8.5vh; */
    section{
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    img{
      width: 150px;
      @media screen and (max-width: 600px){
        width: 100px;
      }
    }
    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
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

const Footer: React.FC<Props> = ({toggleTheme}) => {
    const [checked, setChecked] = useState(false);
    const handleChecked = () => {
      setChecked(checked => !checked)
    }
    
  
    return (
      <Wrapper> 
        <section>
          <img src={FooterLogo} alt="logo kontulari"/>
          <div>
            <h4>LIGHT MODE</h4>
            <label onChange={toggleTheme} onClick={handleChecked}>
              <input type="checkbox"/>
              <span />
            </label>
          </div>
        </section>
      </Wrapper> 
    )
}

export default Footer;