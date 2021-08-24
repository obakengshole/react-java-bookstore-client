import React from 'react'
import { getAllByText, render } from '@testing-library/react'
import BookListItem from '../BookListItem'

describe('BookListItem', () => {
    it('should render booklistitem without error', () => {
        const book = {
            id: 1,
            title: 'test title',
            description: 'test description',
            releaseYear: 2019
        }
        const { getByText, getAllByText } = render(<BookListItem book={book} />)
        expect(getAllByText('test title')[0]).toBeInTheDocument()
        expect(getByText('test description')).toBeInTheDocument()
        expect(getByText(2019)).toBeInTheDocument()
    })
})