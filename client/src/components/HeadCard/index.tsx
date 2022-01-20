import React from 'react';
import { IHeadCard } from '../../types';
import { Grid, Card} from '@mui/material';


const HeadCard: React.FC<IHeadCard> = ({title, time, sun_rise, sun_set}) => {
    return(
        <Grid>
            <Card>
                {title}
                {time}
                {sun_rise}
                {sun_set}

            </Card>

        </Grid>
    )
}
export default HeadCard;