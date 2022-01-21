import React, {} from 'react';
import { WiSnow, WiSleet, WiShowers, WiHail, WiThunderstorm, WiRainMix, WiRain, WiCloudy, WiDayCloudy, WiDaySunny, WiCloud} from 'weather-icons-react';
import { IRenderIcon } from '../../types';

const RenderIcon:React.FC<IRenderIcon> = ({weather_state_name}) =>{
   
    const WeatherIcon = () =>{

    switch (weather_state_name){
        case "Snow":
            return <WiSnow/>
        case "Sleet":
            return <WiSleet/>
        case "Hail":
            return <WiHail/>
        case "Thunderstorm":
            return <WiThunderstorm/>
        case "Heavy Rain":
            return <WiRain/>
        case "Light Rain":
            return <WiRainMix/>
        case "Showers":
            return <WiShowers/>
        case "Heavy Cloud":
            return <WiCloudy size={24}/>
        case "Light Cloud":
            return <WiDayCloudy/>
        case "Clear":
            return <WiDaySunny/>
        default:
            return <WiCloud/>
    }
    }
    
    return(
        <>
            <WeatherIcon />
        </>
    )

}
export default RenderIcon;