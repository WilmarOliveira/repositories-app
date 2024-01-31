import React from "react"
import { useGetRepositoriesQuery } from "../Services/Repositories"

export const RepositoriesSection = () => {
    const { data } = useGetRepositoriesQuery({ name: 'WilmarOliveira' })
    console.log(data)
    return (
        <ul>
            {data?.list.map((item) => (
                <li key={item.id} >{item.name}</li>
            ))}
        </ul>
    )
}