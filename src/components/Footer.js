import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        position: 'static',
    },
})

const Footer = () => {
    const classes = useStyles()
    return (
        <AppBar color="primary" className={classes.appBar} >
            <Toolbar>
                <Typography color="inherit">
                    À propos
                </Typography>
                <Typography color="inherit">
                    Nous contacter
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer