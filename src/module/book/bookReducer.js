const INITIAL_BOOK_STATE = {
    books: [],
    promise: { // adding this for loading spinner to handle slow connection speeds / tracking http requests
        isPending: false,
        isFulfilled: false,
        isErrorOccurred: false
    }
}

const bookReducer = (state = INITIAL_BOOK_STATE, action) => {
    switch(action.type) {
        case 'BOOKLIST': {
            return {
                ...state,
                books: action.payload
            }
        }
        case 'BOOKSBYTITLE': {
            return {
                ...state,
                books: action.payload
            }
        }
        case 'BOOKLISTPENDING': {
            return {
                ...state,
                promise: { isPending: true, isFulfilled: false, isErrorOccurred: false }
            }
        }
        case 'BOOKLISTERROR': {
            return {
                ...state,
                promise: { isPending: false, isFulfilled: false, isErrorOccurred: true }
            }
        }
        case 'BOOKLISTFULFILLED': {
            return {
                ...state,
                promise: { isPending: false, isFulfilled: true, isErrorOccurred: false }
            }
        }

        default: {
            return state
        }
    }
}

export default bookReducer