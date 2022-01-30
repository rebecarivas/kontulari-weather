import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
            title: string,
            colors:{
                background: string,
                searchBackground: string,
                cardBackground: string,
                text: string,
                switchOn: string,
                switchOff: string,   
        }
        }
    }


