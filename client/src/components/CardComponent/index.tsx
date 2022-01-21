import React from 'react';
import { ICard } from '../../types';
import { Box, Card, Typography} from '@mui/material';
import styled from 'styled-components';
import RenderIcon from '../RenderIcon';
import { borderColor } from '@mui/system';

const Wrapper = styled.div`
    text-align: center
`

const CardComponent: React.FC<ICard> = ({ max_temp, min_temp, the_temp, humidity, predictability, applicable_date, weather_state_name}) => {
 
    return (
        <Wrapper>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop:5,
            }}>
                <Card sx={{
                    display: 'grid',
                    minWidth: 300,
                    justifyContent: 'center',
                    borderColor: '#000000',
                    backgroundColor: '#D0CDD7',
                    padding: 3,
                }}>
                    <Typography sx={{
                        fontFamily: ['Roboto', 'Sans-Serif'],
                    }}>
                        {applicable_date}
                    </Typography>
                    <Box sx={{display: 'flex',justifyContent: 'center' }}>
                        <RenderIcon weather_state_name={weather_state_name} />
                    </Box>
                    <Typography sx={{
                        fontFamily: ['Roboto', 'Sans-Serif'],
                    }}>{weather_state_name}</Typography>
                    <Typography sx={{
                        fontFamily: ['Roboto', 'Sans-Serif'],
                        fontSize: 40,
                    }}>{the_temp}</Typography>
                    <Typography sx={{
                        fontFamily: ['Roboto', 'Sans-Serif'],
                    }}>{max_temp}</Typography>
                     <Typography sx={{
                        fontFamily: ['Roboto', 'Sans-Serif'],
                    }}>{min_temp}</Typography>
                      <Typography sx={{
                        fontFamily: ['Roboto', 'Sans-Serif'],
                    }}>{humidity}</Typography>
                       <Typography sx={{
                        fontFamily: ['Roboto', 'Sans-Serif'],
                    }}>{predictability}</Typography>
                </Card>
            </Box>
        </Wrapper>
    )
}
export default CardComponent;