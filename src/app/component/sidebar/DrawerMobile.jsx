"use client"
import { Box, Grid } from '@mui/material'
import React from 'react'
import MiniDrawer from './MiniDrawer'
import { UseNaveOpenStore } from '@/app/store/NavIsOpen'

function DrawerMobile() {
    const { isOpen, setIsOpen } = UseNaveOpenStore()

    const clickHandler = (e) => {
        e.preventDefault()
        setIsOpen() 
    }

    return (
        <>
            {isOpen && (
                <Grid
                    onClick={clickHandler}
                    container
                    spacing={0}
                    display={{ xs: "flex", md: "none" }}
                    position={"fixed"}
                    width={"100vw"}
                    height={"100vh"}
                    top={0}
                    zIndex={1000}
                    right={0}
                    left={0}
                    sx={{
                        backgroundColor: '#0a0a0a63',
                        backdropFilter: 'blur(2px)' 
                    }}
                >
                    <Box onClick={(e)=>e.stopPropagation()}>
                    <MiniDrawer />
                    </Box>
                </Grid>
            )}
        </>
    )
}

export default DrawerMobile