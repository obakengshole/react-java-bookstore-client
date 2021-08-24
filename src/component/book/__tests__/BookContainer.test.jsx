import React from 'react'
import renderWithRedux from '../../../util/testUtil'
import BookContainer from '../BookContainer'
import BookList from '../BookList'

jest.mock('../BookList') // we don't want to render the actual book list component
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

        renderWithRedux(<BookContainer />, {
            initialState: {
                bookReducer: {
                    books
                }
            }
        })

        expect(BookList).toHaveBeenCalledWith({ books }, {});
    })
})