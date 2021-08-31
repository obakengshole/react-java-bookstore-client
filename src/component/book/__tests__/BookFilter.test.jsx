import { fireEvent } from '@testing-library/dom'
import React from 'react'
import { getBooksByTitle } from '../../../module/book/bookAction'
import renderWithRedux from '../../../util/testUtil'
import BookFilter from '../BookFilter'

jest.mock('../../../module/book/bookAction')
describe('BookFilter', () => {
    it('should fire getBooksByTitle action on click of search button', () => {
        const { getByText, getByLabelText } = renderWithRedux(<BookFilter/>, {})
        getBooksByTitle.mockImplementation(() => dispatch => {})

        const textField = getByLabelText('Enter book title')

        fireEvent.change(textField, {target: { value: 'test title' }})

        const searchBtn = getByText('Search')

        fireEvent.click(searchBtn)

        expect(getBooksByTitle).toHaveBeenCalledWith('test title')
    })
})