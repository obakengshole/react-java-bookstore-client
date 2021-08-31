import React from 'react'
import renderWithRedux from '../../../util/testUtil'
import BookContainer from '../BookContainer'
import BookList from '../BookList'
import { getBooksAction } from '../../../module/book/bookAction'

jest.mock('../BookList') // we don't want to render the actual book list component
jest.mock('../../../module/book/bookAction')
describe('BookContainer', () => {

    beforeAll(() => {
        BookList.mockImplementation(() => <div>mock booklist component</div>) // used to provide the fake implementation of components
    })
    it('should render without error', () => {
        const books = [{
            id: 1,
            title: 'test title',
            description: 'test description',
            releaseYear: 2019
        }]

        getBooksAction.mockImplementation(() => ({ type: 'BOOKLIST', payload: books }))
        renderWithRedux(<BookContainer />, {})

        expect(BookList).toHaveBeenCalledWith({ books }, {});
    })

    it('is should show loader when isPending true', () => {
        getBooksAction.mockImplementation(() => ({ type: 'BOOKLISTPENDING'}))
        const { getByTestId } = renderWithRedux(<BookContainer />, {})
        expect(getByTestId('book-loader')).toBeInTheDocument()
    })

    it('is should show error when isErrorOccurred true', () => {
        getBooksAction.mockImplementation(() => ({ type: 'BOOKLISTERROR'}))
        const { getByTestId } = renderWithRedux(<BookContainer />, {})
        expect(getByTestId('book-error-message')).toBeInTheDocument()
    })
})