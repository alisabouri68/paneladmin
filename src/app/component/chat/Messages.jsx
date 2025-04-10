"use client"
import React from 'react'
import { Grid } from '@mui/material'
function Messages({ children }) {
    return (
        <Grid container display={"grid"} size={12} maxHeight={"70vh"} sx={{overflowY:"scroll",}}>{children}</Grid>
    )
}

export default Messages