import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import BookFilter from './BookFilter'
import styles from './BookStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAction } from '../../module/book/bookAction'
import { getBooksSelector } from '../../module/book/bookSelector'

const BookContainer = () => {
    const dispatch = useDispatch() // will provide dispatch function through which we can dispatch our action

    useEffect(() => {
        dispatch(getBooksAction())
    }, [dispatch])

    const books = useSelector(getBooksSelector)
    // console.log(books);
    const classes = styles()
    return (
        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                Display books here
            </Box>
        </Box>
    )
}

export default BookContainer