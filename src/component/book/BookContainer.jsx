import { Box } from '@material-ui/core'
import React from 'react'
import BookFilter from './BookFilter'
import styles from './BookStyles'

const BookContainer = () => {
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