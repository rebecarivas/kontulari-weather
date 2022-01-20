export interface IList {
    name: string;
}
export interface ICard {
        id?: number;
        applicable_date?: string | any;
        humidity?: number | any;
        max_temp?: number | any;
        min_temp?: number | any;
        the_temp?: number | any;
        weather_state_name?: string;
        predictability?: number | any;
}

export interface IHeadCard {
    
    title?: string;
    time?: string;
    sun_rise?: string;
    sun_set?: string;

}
export interface IWeatherData{
    consolidated_weather: [{
        id: number;
        applicable_date?: string;
        humidity?: number;
        max_temp?: number;
        min_temp?: number;
        the_temp?: number;
        weather_state_name?: string;
        predictability?: number;
    }];
    source?: [{}];
    sun_rise: string;
    sun_set: string;
    time: string;
    title: string;
}

export interface IRenderIcon {
        weather_state_name?: string;
}