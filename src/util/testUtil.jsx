import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import reduxThunk from 'redux-thunk'
import reducers from '../module'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

// with the help of this renderWithRedux, we're going to render our components which have dependency on redux
const renderWithRedux = (
    ui,
    {
        initialState,
        store = createStoreWithMiddleware(reducers, initialState)
    }
) => ({
    ...render(
        <Provider store={store}>{ui}</Provider>
    )
})

export default renderWithRedux