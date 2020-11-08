import React from 'react'
import { Provider } from 'react-redux'
import { FirsRouter } from './routers/FirstRouter'
import { store } from './store/store'

export const EshopApp = () => {
    return (
        <>
        <Provider store={store}>
            <FirsRouter/>
        </Provider>
            
        </>
    )
}
