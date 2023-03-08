import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
})

const NavBar = () => {
    const classes = useStyles()
    const { t } = useTranslation()

    const [open, setOpen] = useState()

    const navigate = useNavigate()

    const redirectProfil = () => {
        navigate('/profil')
    }

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" className={classes.title}>
                    SportAddict
                </Typography>
                <Button color="inherit">{t('Equipment')}</Button>
                <Button color="inherit">{t('Calendar')}</Button>
                <Button color="inherit">{t('TrainingPlan')}</Button>
                <Button color="inherit" onClick={redirectProfil}>{t('MyProfil')}</Button>
                <LanguageSwitcher />
            </Toolbar>
        </AppBar >
    )
}

export default NavBar