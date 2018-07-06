declare type ApiAccountKey = string;
declare type ApiUrl = string;

declare interface APIArgs {
    apiAccountKey: ApiAccountKey,
    apiDataset: ApiDataset
}

declare interface APIDatasets {
    [propName: string]: 'BusArrivalv2'
        | 'BusRoutes'
        | 'BusStops'
        | 'Taxi-Availability'
        | 'TrainServiceAlerts'
        | 'CarParkAvailabilityv2'
        | 'ERPRates'
        | 'EstTravelTimes'
        | 'FaultyTrafficLights'
        | 'RoadOpenings'
        | 'RoadWorks'
        | 'Traffic-Images'
        | 'TrafficIncidents'
        | 'TrafficSpeedBands'
        | 'VMS';
}

declare type ApiDataset =
    'BusArrivalv2'
    | 'BusRoutes'
    | 'BusStops'
    | 'Taxi-Availability'
    | 'TrainServiceAlerts'
    | 'CarParkAvailabilityv2'
    | 'ERPRates'
    | 'EstTravelTimes'
    | 'FaultyTrafficLights'
    | 'RoadOpenings'
    | 'RoadWorks'
    | 'Traffic-Images'
    | 'TrafficIncidents'
    | 'TrafficSpeedBands'
    | 'VMS';

declare type ApiResponseFormat = 
    'json'
    | 'xml'
    | 'atom+xml' 
    | 'application/json' 
    | 'application/atom+xml';

declare type ApiParams = {
    [propName: string]: string
};

declare interface ApiConstructorArgs {
    readonly apiAccountKey: string,
    readonly apiDataset: ApiDataset,
    readonly apiResponseFormat?: ApiResponseFormat,
    readonly apiParams: object,
}