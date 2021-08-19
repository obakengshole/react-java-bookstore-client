import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <AppBar posisiton="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Book Store
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header