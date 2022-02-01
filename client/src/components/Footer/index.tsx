import styled from 'styled-components';
import FooterLogo from '../../images/footerKontulari.png'

const Wrapper = styled.div`
    padding-bottom: 10px;
    margin-top: auto;
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
          <img src={FooterLogo} alt="logo kontulari"/>
      </Wrapper> 
    )
}

export default Footer;