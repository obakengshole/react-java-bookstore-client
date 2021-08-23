import React from 'react'
import renderWithRedux from '../../util/testUtil'
import App from '../App'

describe('App component', () => {
    test ('should render app without error', () => {
        const { asFragment } = renderWithRedux(<App />, {})
        expect(asFragment()).toMatchSnapshot()
    })
})