import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeadCard from './components/HeadCard';
import CardComponent from './components/CardComponent';
import { GlobalStyle } from './style/GlobalStyle';
import styled from 'styled-components';
import { IWeatherData } from './types';
// import Loading from '../src/images/loading.gif';


// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   position: relative;
// `
function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const [isLoad, setIsLoad] = useState(false);
  const [isNotLoad, setIsNotLoad] = useState(false);


  return (
    <> 
      <GlobalStyle />
      <Header />
      <SearchBar isLoad={isLoad} setIsLoad={setIsLoad} setIsNotLoad={setIsNotLoad} setWeatherData={setWeatherData}/>
      {isNotLoad
          &&
          <HeadCard 
              title={weatherData?.title}
              time={weatherData?.time.substring(11,19)}
              sun_rise={weatherData?.sun_rise.substring(11,19)}
              sun_set={weatherData?.sun_set.substring(11,19)}
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
      <Footer />
    </>
  );
}

export default App;
