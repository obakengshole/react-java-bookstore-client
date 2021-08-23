import bookReducer, { INITIAL_BOOK_STATE } from '../bookReducer'

describe('Book reducer', () => {
    it('should return new state', () => {
        const action = {
            type: 'BOOKLIST',
            payload: [{
                id: 1,
                title: 'test title',
                description: 'des',
                releaseYear: 2018,
              }]
        }
        const newState = bookReducer(INITIAL_BOOK_STATE, action)
        expect(newState).toEqual({
            books: [{
                id: 1,
                title: 'test title',
                description: 'des',
                releaseYear: 2018
            }]
          })
    })
})