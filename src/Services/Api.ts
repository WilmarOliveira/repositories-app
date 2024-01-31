import { createApi, retry } from "@reduxjs/toolkit/query/react";
import { AxiosBaseQuery } from "./AxiosBaseQuery";

const baseQuery = AxiosBaseQuery({
    baseUrl: '',
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1})

export const api = createApi({
    reducerPath: 'repositories',
    baseQuery: baseQueryWithRetry,
    tagTypes: [
        'Repositories'
    ],
    endpoints: () => ({})
})