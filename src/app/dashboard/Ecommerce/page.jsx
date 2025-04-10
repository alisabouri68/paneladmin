"use client"
import CardInfoEcommerce from '@/app/component/cardinfo/CardInfoEcommerce'
import ChartBars from '@/app/component/chartsbar/a/ChartBars'
import PieAnimation from '@/app/component/chartsbar/PieAnimation'
import TableProducts from '@/app/component/table/TableProducts'
import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function page() {
    return (

        <main>
            <Grid container size={{ xs: 12 }} minHeight="75vh" boxShadow={3} spacing={3}>
                <Grid container size={12} spacing={3}>
                    <Grid container direction={"column"} size={{ xs: 12, md: 3 }}>
                        <CardInfoEcommerce />
                        <CardInfoEcommerce />
                    </Grid>
                    <Grid container direction={"column"} padding={3} size={{ xs: 12, md: 9 }} boxShadow={3}>
                        <Typography variant="h6" color="">Monthly Avg. Income</Typography>
                        <ChartBars />
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12 }} minHeight="75vh" boxShadow={3} spacing={3}>
                    <Grid container direction={"column"} padding={3} size={{ xs: 12, md: 9 }} boxShadow={3}>
                        <Typography variant="h6" color="">Popular Products</Typography>
                        <TableProducts />
                    </Grid>
                    <Grid container direction={"column"} size={{ xs: 12, md: 3 }} justifyContent={'center'} alignItems={'center'}>
                        <PieAnimation />
                    </Grid>
                </Grid>
            </Grid>
        </main>
    )
}

export default page