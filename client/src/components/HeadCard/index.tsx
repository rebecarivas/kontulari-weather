import React from 'react';
import { IHeadCard } from '../../types';
import { Box, Card, Typography} from '@mui/material';


const HeadCard: React.FC<IHeadCard> = ({title, time, sun_rise, sun_set}) => {
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', margin: 5 }}>
            <Card sx={{padding: 3, backgroundColor: '#D0CDD7'}}>
                <Typography sx={{fontFamily:['Roboto', 'sans-serif']}}>    
                    <Typography sx={{fontSize: 20}}>
                        {`${title}, ${time}`}
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        {sun_rise}
                        {sun_set}
                    </Box>
                </Typography>
            </Card>
        </Box>
    )
}
export default HeadCard;