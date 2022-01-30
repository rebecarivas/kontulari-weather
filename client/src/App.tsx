import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeadCard from './components/HeadCard';
import CardComponent from './components/CardComponent';
import usePersistedState from './utils/usePersistedState';
import { GlobalStyle} from './style/GlobalStyle';
import dark from './style/themes/dark';
import light from './style/themes/light';
import styled, {ThemeProvider, DefaultTheme} from 'styled-components';
import { IWeatherData } from './types';
import api from './services/api';
import Loading from '../src/images/loading.gif';


const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  padding-top: 10px;
  @media screen and (max-width: 600px){
      flex-direction: column;
      justify-content: center;
    }

  div{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* @media screen and (max-width: 600px){
      flex-direction: column;
      justify-content: center;
    } */
   
  }
`

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const [isLoad, setIsLoad] = useState(false);
  const [isNotLoad, setIsNotLoad] = useState(false);
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
      setTheme(theme.title === 'dark' ? light : dark)
  };

  // useEffect(() => {
  //   const localTheme = localStorage.getItem("theme");
  //   localTheme && setTheme(localTheme);
  // }, []);

//   useEffect(() => {
//     setIsLoad(true)
//     if (Object.keys(weatherData!).length === 0){
//       api
//       .get('?location=Salvador')
//       .then(response => setWeatherData(response.data))
//       .catch(error => console.log(error))
//       .finally(() => setIsLoad(false))
//     }
//   }, [weatherData])

// if (Object.keys(weatherData!).length === 0){
//   return {weatherData.consolidated_weather.map(item => (       
//     <CardComponent 
//         key={item.id}
//         applicable_date={new Date(item.applicable_date!).toDateString()}
//         the_temp={`${item.the_temp!.toFixed(1)}°C`}
//         weather_state_name={item.weather_state_name}
//         max_temp={`Max: ${item.max_temp!.toFixed(1)}°C`}
//         min_temp={`Min: ${item.min_temp!.toFixed(1)}°C`}
//         humidity={`Humidity: ${item.humidity}%`}
//         predictability={`Predictability: ${item.predictability}%`}
//     />  

// ))}     }
//   }
    
  return (
    <> 
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SearchBar isLoad={isLoad} setIsLoad={setIsLoad} setIsNotLoad={setIsNotLoad} setWeatherData={setWeatherData}/>
        <Container>
           {isNotLoad
               &&
               <HeadCard 
                   title={weatherData?.title}
                   time={weatherData?.time.substring(11,19)}
                   sun_rise={weatherData?.sun_rise.substring(11,19)}
                   sun_set={weatherData?.sun_set.substring(11,19)}
               />
           }
           <div>
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
            </div> 
        </Container> 
        <Footer toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </>
  );
}

export default App;
