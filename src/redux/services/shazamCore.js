import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


 export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com/charts/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b1e755d1e3mshbfab65c2447aff4p108570jsn3e0ba1a9da0b');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: (genres) => '/get-top-songs-in-world'}),
    }),
 }); 

 export const {
    useGetTopChartsQuery,
 } = shazamCoreApi;