import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactCountryFlag from "react-country-flag"
import { MenuItem, Select } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    select: {
        '&:focus': {
            backgroundColor: 'transparent',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        padding: '0rem',
        height: '1rem',
    },
    menu: {
        width: 'auto',
    },
})

const LanguageSwitcher = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()

    const handleLangChange = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <Select
            value={i18n.language}
            onChange={(e) => handleLangChange(e.target.value)}
            className={classes.select}
            MenuProps={{ classes: { paper: classes.menu } }}
        >
            <MenuItem value='fr'>
                <ReactCountryFlag countryCode='FR' svg />
            </MenuItem>
            <MenuItem value='en'>
                <ReactCountryFlag countryCode='GB' svg />
            </MenuItem>
        </Select>
    )
}

export default LanguageSwitcher