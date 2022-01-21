import React, { useState } from 'react';
import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import styled from 'styled-components';
import api from '../../services/api';
import list from '../../list';
import HeadCard from '../HeadCard';
import CardComponent from '../CardComponent';
import { IList, IWeatherData } from '../../types';
import Loading from '../../images/loading.gif';

const Wrapper = styled.div`
    align-itens: center
`

const LoadSection = styled.div`
    display: flex;
    justify-content: center;
`


const SearchBar: React.FC = () => {
    const [cities, setCities] = useState([{}]);
    const [weatherData, setWeatherData] = useState<IWeatherData>();
    const [isLoad, setIsLoad] = useState(false);
    const [isNotLoad, setIsNotLoad] = useState(false);

    const handleOnSearch = (input: string) =>{
        const subList: IList[] = list.filter((city) => {
            return city.name.toLowerCase().includes(input.toLowerCase())
        })
        setCities(subList)
    }

    const HandleOnSelect = (city: IList) => {
        setIsLoad(true)
        api.get(`?location=${city.name}`)
        .then(response => setWeatherData(response.data))
        .catch(error => console.log("error"))
        .finally(() => {setTimeout(() => {
            setIsLoad(false);
            setIsNotLoad(true);
        }
        , 2000)})
    }

    if(isLoad){
        return <LoadSection><img src={Loading} alt='load'/></LoadSection>
    }

    return(
        <Wrapper>
                <ReactSearchAutocomplete 
                    items={cities}
                    onSearch={handleOnSearch}
                    onSelect={HandleOnSelect}
                    autofocus
                    placeholder="Enter a city name"
                />
            {   isNotLoad
                &&
                <HeadCard 
                    title={weatherData?.title}
                    time={weatherData?.time.substring(11,19)}
                    sun_rise={`Sunrise: ${weatherData?.sun_rise.substring(11,19)}`}
                    sun_set={`Sunset: ${weatherData?.sun_set.substring(11,19)}`}
                />
            }
            {weatherData?.consolidated_weather.map(item => (       
                <CardComponent 
                    key={item.id}
                    applicable_date={new Date(item.applicable_date!).toDateString()}
                    the_temp={`${item.the_temp!.toFixed(1)}°C`}
                    weather_state_name={item.weather_state_name}
                    max_temp={`Max: ${item.max_temp!.toFixed(1)}°C`}
                    min_temp={`Min: ${item.min_temp!.toFixed(1)}°C`}
                    humidity={`Humidity: ${item.humidity}%`}
                    predictability={`Predictability: ${item.predictability}%`}
                />  

            ))}    
        </Wrapper>
    )}

export default SearchBar;