"use client"
import { Avatar, Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import { SparkLineChart } from '@mui/x-charts';
import React from 'react'
import { FaSackDollar } from "react-icons/fa6";

function CardInfoEcommerce() {
  return (
    <Grid container boxShadow={3} direction={'column'} size={12} spacing={3} padding={3}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"column"} spacing={3}>
          <Box>
            <Avatar>
              <FaSackDollar />
            </Avatar>
          </Box>
          <Box>
            <Typography variant="subtitle2" color="">Total Revenue</Typography>
          </Box>
        </Stack>
        <Stack > <SparkLineChart data={[1, 4, 8, 0, 4, 2, 4, 5]} width={200} height={100} /></Stack>
      </Stack>
      <Divider />
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"column"} spacing={3}>
          <Box>
            <Typography variant="h5" color="">$8365.00</Typography>

          </Box>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="subtitle2" color="green">8.5% </Typography>
            <Typography variant="subtitle2" color=""> New Sessions Today</Typography>
          </Stack>
        </Stack>
        <Stack ><Button variant="contained" color="success">View Report</Button> </Stack>
      </Stack>
    </Grid>)
}

export default CardInfoEcommerce