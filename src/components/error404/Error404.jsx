import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import s from './Error404.module.css';


function Error404() {
  return (
    <div className={s.ContainerError}>
        <>
            <Box
            component="main"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                minHeight: '100%'
            }}
            >
                <Container maxWidth="md">
                    <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    >
                    <Typography
                        align="center"
                        color="blueviolet"
                        variant="h3"
                    >
                        404: La página que buscas no está aquí
                    </Typography>
                    <Typography
                        align="center"
                        color="textPrimary"
                        variant="subtitle2"
                    >
                        O intentaste una ruta sombría o viniste aquí por error.
                        Sea lo que sea, intenta usar la navegación
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <img
                        alt="Under development"
                        src="/errorPue.svg"
                        style={{
                            marginTop: 50,
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 560
                        }}
                        />
                    </Box>
                    <Link to='/' >
                        <Button
                            component="a"
                            startIcon={(<ArrowBackIcon fontSize="small" />)}
                            sx={{ mt: 3 }}
                            variant="contained"
                            color='secondary'
                        >
                            Volver
                        </Button>
                    </Link>
                    </Box>
                </Container>
            </Box>
        </>
    </div>
  )
}

export default Error404