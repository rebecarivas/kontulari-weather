import React from 'react';
import {WiCloud, WiShowers, WiHail, WiDayCloudy, WiRainMix,  WiCloudy, WiDaySunny, WiRain, WiSleet, WiSnow, WiThunderstorm } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import { IRenderIcon } from '../../types';

const RenderIcon:React.FC<IRenderIcon> = ({weather_state_name}) =>{
   
    const WeatherIcon = () =>{
        switch (weather_state_name){
            case "Snow":
                return <WiSnow />
            case "Sleet":
                return <WiSleet />
            case "Hail":
                return <WiHail />
            case "Thunderstorm":
                return <WiThunderstorm />
            case "Heavy Rain":
                return <WiRain />
            case "Light Rain":
                return <WiRainMix />
            case "Showers":
                return <WiShowers />
            case "Heavy Cloud":
                return <WiCloudy />
            case "Light Cloud":
                return <WiDayCloudy/>
            case "Clear":
                return <WiDaySunny/>
            default:
                return <WiCloud />
        }
    }
    
    return(
    <IconContext.Provider value={{ color: `${props => props.theme.colors.text}`, size: "4rem" }}>
        <div>
            <WeatherIcon />
        </div>
    </IconContext.Provider>  
    )

}
export default RenderIcon;