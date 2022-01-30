import React from 'react';
import { IHeadCard } from '../../types';
import {WiSunrise, WiSunset } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: var(--green);
    width: 300px;
    margin-left: 50px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 600px){
        margin-bottom: 20px;
        
    }

    div{
        color: var(--preto);
        font-size: 20px;
    }
`

const HeadCard: React.FC<IHeadCard> = ({title, time, sun_rise, sun_set}) => {
    return(
        <Wrapper>
            <div style={{fontWeight: 'bold', fontSize: 30}}>{title}</div>
            <div style={{fontWeight: 'bold', fontSize: 20}}>{time}</div>
            <IconContext.Provider value={{ color: "#000", size: "3rem" }}>
                <div><WiSunrise /></div>
                    <div>{sun_rise}</div>
                <div><WiSunset /></div>
                    <div>{sun_set}</div>
            </IconContext.Provider>   
        </Wrapper>
    )
}
export default HeadCard;