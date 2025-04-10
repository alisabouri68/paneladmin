import MessageContent from '@/app/component/chat/MessageContent'
import UserChat from '@/app/component/chat/UserChat'
import { Grid } from '@mui/material'
import React from 'react'

function page() {
    return (
        <Grid container component={"main"} size={12} boxShadow={3} spacing={3} minHeight={"75vh"} overflow={"hidden"} padding={3}>

            <Grid container size={{ xs: 12, md: 3 }} boxShadow={3}><UserChat /></Grid>
            <Grid container boxShadow={3} size={{ xs: 12, md: 9 }}><MessageContent /></Grid>






        </Grid>
    )
}

export default page