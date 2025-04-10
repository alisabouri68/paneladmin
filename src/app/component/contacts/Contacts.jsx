"use client"
import React from 'react'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import { Avatar, Grid, Paper } from '@mui/material'

export default function Contacts() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://dummyjson.com/users').then(res => res.json()).then(datas => setData(datas))
    }, [])
    return (
        <Grid container size={{ xs: 12, md: 6 }} boxShadow={3}>
            <Paper sx={{p:"10px",display:"grid" , justifyContent:"center" , alignItems:"center"}} >
                <Typography variant="h6" color="">Contacts</Typography>
                <Grid container spacing={2}>
                    {data && data.users.slice(1, 7).map(item => {
                        return (
                            <Grid key={item.id} boxShadow={1} padding={2} borderRadius={1} container direction={'column'} spacing={2} size={{ xs: 12, md: 6 }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Avatar sx={{border:"1px solid green"}} alt={item.firstName} src={item.image}  />
                                <Typography textAlign={"center"} variant="body1" color="">{item.firstName}</Typography>
                                <Typography textAlign={"center"} variant="body1" color="textDisabled">{item.email}</Typography>

                            </Grid>
                        )
                    })}
                </Grid>


            </Paper>
        </Grid>
    )
}
