import React from "react"
import { Provider } from "react-redux"
import { RepositoriesSection } from "../RepositoriesSection"
import { setupStore } from "../Store"

export const Repositories = () => {
    const store = setupStore()

    return (
        <Provider store={store} >
            <RepositoriesSection />
        </Provider>
    )
}