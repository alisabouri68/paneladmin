import { Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function CardTop({ percent, title, value, buttom }) {
    return (
        <Grid container direction={"column"} display={"grid"} padding={1} size={{ xs: 12, md: 3 }} boxShadow={3} >
            <Stack width={"100%"} direction={"row"} justifyContent={"space-between"}>
                <Typography fontWeight={"bold"} variant="body1" color="">{title}</Typography>
                <Typography variant="subtitle1" color="success">{percent}</Typography>
            </Stack>
            <Stack size={12}>
                <Typography fontWeight={"bold"} variant="h5" color="textDisabled">{value}</Typography>
            </Stack>
            <Divider />
            <Stack display={"flex"} justifyContent={"center"} alignItems={"center"} size={12}>
                {buttom}
            </Stack>


        </Grid>
    )
}
