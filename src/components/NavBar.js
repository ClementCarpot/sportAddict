import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const NavBar = () => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SportAddict
                </Typography>
                <Button color="inherit">Equipement</Button>
                <Button color="inherit">Calendrier</Button>
                <Button color="inherit">Plan d entraînement</Button>
            </Toolbar>
        </AppBar >
    )
}

export default NavBar