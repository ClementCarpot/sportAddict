import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Fab, Zoom } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const useStyles = makeStyles((theme) => ({
    scrollTop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

export default function ScrollTop() {
    const classes = useStyles()

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            window.pageYOffset > 300 ? setVisible(true) : setVisible(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Zoom in={visible}>
            <div onClick={handleClick} className={classes.scrollTop}>
                <Fab color="secondary" size="medium">
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    )
}
