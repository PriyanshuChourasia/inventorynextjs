import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { IDashboardMetrics } from "../interface/DashboardMetrics";


export const api  = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes: ["DashboardMetrics"],
    endpoints:(builder) =>({
        getDashboardMetrics: builder.query<IDashboardMetrics,void>({
            query:() => "/dashboard",
            providesTags: ["DashboardMetrics"]
        }),
    }),
});

export const {
    useGetDashboardMetricsQuery,
} = api;