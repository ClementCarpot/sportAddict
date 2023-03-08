import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
        justifyContent: 'space-between',
    },
})

const Footer = () => {
    const classes = useStyles()
    return (
        <AppBar position="static" color="primary" className={classes.appBar}>
            <Toolbar>
                <Typography color="inherit">
                    À propos
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer