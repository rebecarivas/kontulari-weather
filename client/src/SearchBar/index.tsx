import React, { useState } from 'react';
import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import api from '../../services/api';
import list from '../../list';

const SearchBar: React.FC = () => {
    const [cities, setCities] = useState([{}]);
    const [weatherData, setWeatherData] = useState<IWeatherData>();
    const [isLoad, setIsLoad] = useState(false);

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
        .finally(() => {setTimeout(() => {setIsLoad(false)}, 2000)})
    }

    return(
        <>
            <ReactSearchAutocomplete 
            items={cities}
            onSearch={handleOnSearch}
            onSelect={HandleOnSelect}
            autofocus
            placeholder="Enter a city name"
            />
         </>
    )}
export default SearchBar;