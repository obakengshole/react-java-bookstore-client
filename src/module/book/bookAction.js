import getBooksService from "./bookService";

export const getBooksAction = () => async (dispatch) => {
    try {
        const books = await getBooksService()
        dispatch({
            type: 'BOOKLIST',
            payload: books.data
        })
    } catch (error) {
        console.log(error);
    }
}