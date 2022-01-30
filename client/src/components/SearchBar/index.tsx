import React, { useState, useContext } from 'react';
import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import styled, {ThemeContext} from 'styled-components';
import api from '../../services/api';
import list from '../../list';
import { IList, IWeatherData } from '../../types';
import Loading from '../../images/loading.gif';

const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    padding-bottom: 10px;
`
 const SearchBarContainer = styled.div`
    width: 50%;
    display: block;
    margin: 0 auto;
    @media screen and (max-width: 600px){
        width: 80%;
    }
 `
 
 const LoadSection = styled.div`
 display: flex;
 justify-content: center;
`

interface ISearchBar{
    isLoad: boolean;
    setIsLoad: React.Dispatch<React.SetStateAction<boolean>>;
    setIsNotLoad: React.Dispatch<React.SetStateAction<boolean>>;
    setWeatherData: React.Dispatch<React.SetStateAction<IWeatherData | undefined>>
}

const SearchBar = ({isLoad, setIsLoad, setIsNotLoad, setWeatherData}: ISearchBar) => {
    const [cities, setCities] = useState([{}]);
    const {colors} = useContext(ThemeContext)

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
            <SearchBarContainer>
                <ReactSearchAutocomplete 
                    items={cities}
                    onSearch={handleOnSearch}
                    onSelect={HandleOnSelect}
                    autofocus
                    placeholder="Enter a city name"
                    styling={{
                             backgroundColor: `${props => props.theme.colors.searchBackground}`,
                             border: "1px solid #1a3b51",
                             color: '#bec6cf',
                             fontWeight: "normal",
                           }}
                />
            </SearchBarContainer>
        </Wrapper>
    )}

export default SearchBar;