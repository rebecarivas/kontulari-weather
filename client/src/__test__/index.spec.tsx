import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import dark from '../style/themes/dark';
import App from '../App'

const AppRender = () => render(
    <ThemeProvider theme={dark}>
        <App/>
    </ThemeProvider>);

describe('rendering elements', () => {
    test('testing react search autocomplete', () => {
        AppRender()
        const cityName = screen.getByPlaceholderText('Enter a city name') 
        fireEvent.change(cityName, { target: { value: 'Salvador' } });
        expect(cityName.target.value).toEqual('Salvador');
    })
})