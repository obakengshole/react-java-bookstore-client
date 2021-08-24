import React from 'react'
import { render } from '@testing-library/react'
import BookList from '../BookList'
import BookListItem from '../BookListItem'

jest.mock('../BookListItem')

describe('BookList', () => {
    beforeAll(() => {
        BookListItem.mockImplementation(() => <div>booklistitem component</div>)
    })
    const books = [
        {
            id: 1,
            title: 'test title',
            description: 'test description',
            releaseYear: 2019
        },
        {
            id: 2,
            title: 'test title 2',
            description: 'test description 2',
            releaseYear: 2020
        }
    ]

    it('should render booklist without error', () => {
        render(<BookList books={books}/>)
        expect(BookListItem).toHaveBeenCalledTimes(2)
    })
})