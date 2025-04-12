"use client"
import { Box, Grid } from '@mui/material'
import React from 'react'
import MiniDrawer from './MiniDrawer'
import { UseNaveOpenStore } from '@/app/store/NavIsOpen'

function DrawerMobile() {
    const { isOpen, setIsOpen } = UseNaveOpenStore()

    const handleCloseDrawer = (e) => {
        e.preventDefault()
        setIsOpen(false)
    }

    const preventClose = (e) => {
        e.stopPropagation()
    }

    return (
        <>
            {isOpen && (
                <Grid
                    onClick={handleCloseDrawer}
                    container
                    spacing={0}
                    display={{ xs: "flex", md: "none" }}
                    position="fixed"
                    width="100vw"
                    height="100vh"
                    top={0}
                    left={0}
                    zIndex={1300}
                    sx={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    }}
                >
                    <Box
                        onClick={preventClose}
                        sx={{
                            width: '70%',
                            minWidth: 280,
                            maxWidth: 320,
                            height: '100%',
                            position: 'relative',
                            borderRight: (theme) => `1px solid ${theme.palette.divider}`,
                            backgroundColor: 'background.paper',
                            boxShadow: 24,
                        }}
                    >
                        <MiniDrawer />
                    </Box>
                </Grid>
            )}
        </>
    )
}

export default DrawerMobile