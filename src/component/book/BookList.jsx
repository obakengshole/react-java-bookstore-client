import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import makeStyles from './BookStyles'
import BookListItem from './BookListItem'

const propTypes = {
    books: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    }).isRequired
}

const BookList = ({ books }) => {
    const classes = makeStyles();
    return (
        <Box className={classes.booksList} ml={5}>
            {books.map((book) => (
                <BookListItem book={book} key={book.id}/>
            ))}
        </Box>
    )
}

BookList.propTypes = propTypes
export default BookList