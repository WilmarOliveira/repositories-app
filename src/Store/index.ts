import { Middleware, combineReducers, configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import type {PreloadedStateShapeFromReducersMapObject} from '@reduxjs/toolkit'
import { api } from "../Services/Api";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer
})

export const middlewareErrorToast: Middleware = () => (next: any) => (action: any) => {
    if (isRejectedWithValue(action)) {
        if (action.payload.data.errors && action.payload.data.errors[0].message) {
            console.error('error')
        }

        if (action.payload.data.message) {
            console.error('error')
        }
    }

    return next(action)
}

export const setupStore = (preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            })
                .concat(api.middleware)
                .concat(middlewareErrorToast),
                preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector