import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { IDashboardMetrics } from "../interface/DashboardMetrics";
import { IProduct } from "../interface/Product";
import { IProductRequest } from "../interface/ProductRequest";
import { IExpenseByCategorySummary } from "../interface/ExpenseByCategorySummary";
import { IUser } from "../interface/User";


export const api  = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes: ["DashboardMetrics","Products","Users","Expenses"],
    endpoints:(builder) =>({
        getDashboardMetrics: builder.query<IDashboardMetrics,void>({
            query:() => "/dashboard",
            providesTags: ["DashboardMetrics"]
        }),
        getProducts: builder.query<IProduct[], string | void>({
            query: (search) => ({
                url: "/products",
                params: search ? { search } : {},
            }),
            providesTags: ["Products"],
        }),
        createProduct: builder.mutation<IProduct, IProductRequest>({
            query: (newProduct) => ({
                url: "/products",
                method: "POST",
                body: newProduct,
            }),
            invalidatesTags: ["Products"],
        }),
        getUsers: builder.query<IUser[], void>({
            query: () => "/users",
            providesTags: ["Users"],
        }),
        getExpensesByCategory: builder.query<IExpenseByCategorySummary[], void>({
            query: () => "/expenses",
            providesTags: ["Expenses"],
        }),
    }),
});

export const {
    useGetDashboardMetricsQuery,
    useGetProductsQuery,
    useCreateProductMutation,
    useGetUsersQuery,
    useGetExpensesByCategoryQuery,
} = api;