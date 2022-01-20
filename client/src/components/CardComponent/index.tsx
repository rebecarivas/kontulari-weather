import React from 'react';
import { ICard } from '../../types';
import { Grid, Card} from '@mui/material';


const CardComponent: React.FC<ICard> = ({ max_temp, min_temp, the_temp, humidity, predictability, applicable_date, weather_state_name}) => {
 
    return (
        <Grid>
            <Card>
            {applicable_date}
            {the_temp}
            {max_temp}
            {min_temp}
            {weather_state_name}
            {humidity}
            {predictability}
            </Card>
        </Grid>
    )
}
export default CardComponent;