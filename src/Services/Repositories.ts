import { api } from "./Api";
import { AxiosResponse } from "axios";

interface GetRepositoriesResponse {
    list: any[]
}

interface GetRepositoriesParams {
    name?: string
}

export const repositoriesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRepositories: builder.query<GetRepositoriesResponse, GetRepositoriesParams>({
            query: ({name}) => ({
                url: `https://api.github.com/users/${name}/repos`,
                method: 'GET',
            }),
            transformResponse(apiResponse: AxiosResponse) {
                return {
                    list: apiResponse.data,
                }
            },
            providesTags: ['Repositories']
        })
    })
})

export const { useGetRepositoriesQuery } = repositoriesApi