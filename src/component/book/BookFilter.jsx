import { Box, Button, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { getBooksByTitle } from '../../module/book/bookAction'
import styles from './BookStyles'
import { useDispatch } from 'react-redux'

const BookFilter = () => {
    const classes = styles()
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()

    const handleSearchChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleSearchClick = () => {
        dispatch(getBooksByTitle(searchText))
    }

    return (
        <Box className={classes.bookFilter}>
            <Paper className={classes.bookFilterPaper}>
                <Typography>Search Book Filters</Typography>
                <Box paddingTop={3} marginBottom={2}>
                    <TextField
                    placeholder="Enter book title"
                    id="book-search"
                    data-testid="book-title-input"
                    label="Enter book title"
                    variant="outlined"
                    onChange={handleSearchChange}
                    />
                </Box>
                <Button onClick={handleSearchClick} 
                    variant="contained" color="primary">
                    Search
                </Button>
            </Paper>
        </Box>
    )
}

export default BookFilter