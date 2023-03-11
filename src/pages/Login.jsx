import { Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { t } from 'i18next'
import React, { useState } from 'react'

const Login = () => {
    const [open, setOpen] = useState(true)

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    return (
        <Grid container direction='column' spacing={2} sx={{ display: 'block'}}>
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
                <DialogTitle>
                    {t('login')}
                    <IconButton
                        aria-label="close"
                        onClick={() => setOpen(false)}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
                        <Grid item>
                            <TextField 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                                label={t('username')}
                                sx={{
                                    width: 300,
                                }}
                            />  
                        </Grid>
                        <Grid item>
                            <TextField 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                label={t('password')}
                                sx={{
                                    width: 300,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button 
                                variant='contained'
                                onClick={() => setOpen(false)} 
                                autoFocus
                            >
                                {t('signIn')}
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Grid>
            
    )
}

export default Login