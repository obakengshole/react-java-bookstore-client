const INITIAL_BOOK_STATE = {
    books: []
}

const bookReducer = (state = INITIAL_BOOK_STATE, action) => {
    switch(action.type) {
        case 'BOOKLIST': {
            return {
                ...state,
                books: action.payload
            }
        }

        default: {
            return state
        }
    }
}

export default bookReducer