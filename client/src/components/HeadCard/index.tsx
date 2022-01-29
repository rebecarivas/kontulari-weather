import React from 'react';
import { IHeadCard } from '../../types';
import { Box, Card, Typography} from '@mui/material';
import {WiSunrise, WiSunset } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Container = styled.div`
    /* min-height: 20vh; */
`

const HeadCard: React.FC<IHeadCard> = ({title, time, sun_rise, sun_set}) => {
    return(
        <Container>
            <Box sx={{display: 'flex', justifyContent: 'center', margin: 5 }}>
                <Card sx={{padding: 2, backgroundColor: '#f4f1de', borderRadius: 3, maxWidth: 300}}>
                    <Typography sx={{fontFamily:['Roboto', 'sans-serif']}}>    
                        <Box sx={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <Typography sx={{fontSize: 25, fontWeight: 'bold'}}>
                                {title},
                            </Typography>
                            <Typography sx={{fontSize: 15 }}>
                                {time}
                            </Typography>
                        </Box>
                        <IconContext.Provider value={{ color: "#000", size: "3rem" }}>
                        <Box sx={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <WiSunrise />
                            <Typography>
                                {sun_rise}
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'baseline', justifyContent: 'center'}}>
                            <WiSunset />
                            <Typography>
                                {sun_set}
                            </Typography>
                        </Box>
                        </IconContext.Provider>   
                    </Typography>
                </Card>
            </Box>
        </Container>
    )
}
export default HeadCard;