import { ICard } from '../../types';
import styled from 'styled-components';
import RenderIcon from '../RenderIcon';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.cardBackground};
    border-radius: 5px;
    padding: 10px;
    width: 300px;
    margin-bottom: 20px;
`

const CardComponent: React.FC<ICard> = ({ max_temp, min_temp, the_temp, humidity, predictability, applicable_date, weather_state_name}) => {
 
    return (
        <Wrapper>
            <div>{applicable_date}</div>
            <RenderIcon weather_state_name={weather_state_name} />
            <div style={{fontWeight: 'bold'}}>{weather_state_name}</div>    
            <div style={{fontSize: 30, color: '#72e1b3'}}>{the_temp}</div>
            <div>{max_temp}</div>
            <div>{min_temp}</div>
            <div>{humidity}</div>
            <div>{predictability}</div>
        </Wrapper>
    )
}
export default CardComponent;