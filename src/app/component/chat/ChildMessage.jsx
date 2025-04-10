"use client"
import React from 'react'
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'

function ChildMessage({ name, image, date }) {
    return (
        <Grid container direction={"row"} size={12} spacing={3} boxShadow={3} alignItems={"center"} padding={2}>
            <Avatar alt={name} src={image} />
            <Stack spacing={2} direction={"column"}>
                <Box><Typography variant="subtitle1" color="">{name}</Typography></Box>
                <Box><Typography variant="subtitle1" color="textSecondary">Sorry, I just back !</Typography></Box>
            </Stack>
            <Stack>
                <Box><Typography variant="subtitle1" color="success">{date}</Typography></Box>
                <Box></Box>
            </Stack>

        </Grid>
    )
}

export default ChildMessage