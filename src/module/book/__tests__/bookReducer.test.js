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
            }],
            promise: { isPending: false, isFulfilled: false, isErrorOccurred: false}
          })
    })

    it('should return new state for BOOKSBYTITLE action', () => {
        const action = {
            type: 'BOOKSBYTITLE',
            payload: [{
                id: 1,
                title: 'another book',
                description: 'another description',
                releaseYear: 2018
            }]
        }

        const newState = bookReducer(INITIAL_BOOK_STATE, action)
        expect(newState).toEqual({
            books: [{
                id: 1,
                title: 'another book',
                description: 'another description',
                releaseYear: 2018
            }],
            promise: { isPending: false, isFulfilled: false, isErrorOccurred: false}
        })
    })
})