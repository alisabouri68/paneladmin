import { Grid, Stack, Box, Avatar, Typography, IconButton, Paper, InputBase } from '@mui/material'
import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SendIcon from '@mui/icons-material/Send';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, grey } from '@mui/material/colors';
function MessageContent() {
    return (
        <Grid container display={"flex"} size={12} direction={"column"} padding={2}>
            <Paper sx={{ p: '20px 4px', display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <Grid container spacing={1}>
                    <Stack>
                        <Avatar
                            alt="AliEmamiSabouri"
                            src="https://dummyjson.com/icon/michaelw/128" />
                    </Stack>
                    <Stack>
                        <Box><Typography variant="body1" color="">AliEmamiSabouri</Typography></Box>
                        <Box><Typography variant="caption" color="textDisabled">Last seen: 2 hours ago</Typography></Box>
                    </Stack>

                </Grid>
                <Grid container spacing={1} >
                    <Box>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                            <LocalPhoneIcon />

                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                            <VideocamIcon />

                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                            <DeleteIcon />

                        </IconButton>
                    </Box>
                </Grid>
            </Paper>
            <Grid container size={12} flexGrow={1}  >
                <Grid container direction={'row'} spacing={1} size={12}>
                    <Stack size={1}>
                        <Avatar alt="" src="https://dummyjson.com/icon/michaelw/128" />
                    </Stack>
                    <Grid container size={11} direction={'column'}>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 10px 0", display: "flex", alignItems: "center", p: "10px", bgcolor: grey[50], border: "1px solid green" }}>
                            <Typography variant="subtitle1" color="black">Good Morning!</Typography>
                        </Stack>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 10px 0", display: "flex", alignItems: "center", p: "10px", bgcolor: grey[50], border: "1px solid green" }}>
                            <Typography variant="subtitle1" color="black">There are many variations of passages of Lorem Ipsum available.</Typography>
                        </Stack>

                    </Grid>
                </Grid>
                <Grid container direction={'row-reverse'} spacing={1} size={12}>
                    <Stack size={1}>
                        <Avatar alt="" src="https://dummyjson.com/icon/jamesd/128" />
                    </Stack>
                    <Grid container size={11} display={"flex"} alignItems={"flex-end"} direction={'column'}>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 0 10px", display: "flex", alignItems: "center", p: "10px", bgcolor: green[800], }}><Typography variant="subtitle1" color="white">Hi,</Typography></Stack>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 0 10px", display: "flex", alignItems: "center", p: "10px", bgcolor: green[800], }}><Typography variant="subtitle1" color="white">Can be verified on any platform using docker?</Typography></Stack>
                    </Grid>
                </Grid>
                <Grid container direction={'row'} spacing={1} size={12}>
                    <Stack size={1}>
                        <Avatar alt="" src="https://dummyjson.com/icon/michaelw/128" />
                    </Stack>
                    <Grid container size={11} direction={'column'}>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 10px 0", display: "flex", alignItems: "center", p: "10px", bgcolor: grey[50], border: "1px solid green" }}><Typography variant="subtitle1" color="black">Have a nice day !</Typography></Stack>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 10px 0", display: "flex", alignItems: "center", p: "10px", bgcolor: grey[50], border: "1px solid green" }}><Typography variant="subtitle1" color="black">Command was run with root privileges. I'm sure about that.</Typography></Stack>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 10px 0", display: "flex", alignItems: "center", p: "10px", bgcolor: grey[50], border: "1px solid green" }}><Typography variant="subtitle1" color="black">ok</Typography></Stack>
                    </Grid>
                </Grid>
                <Grid container direction={'row-reverse'} spacing={1} size={12}>
                    <Stack size={1}>
                        <Avatar alt="" src="https://dummyjson.com/icon/jamesd/128" />
                    </Stack>
                    <Grid container size={11} display={"flex"} alignItems={"flex-end"} direction={'column'}>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 0 10px", display: "flex", alignItems: "center", p: "10px", bgcolor: green[800], }}><Typography variant="subtitle1" color="white">Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :)</Typography></Stack>
                    </Grid>
                </Grid>
                <Grid container direction={'row'} spacing={1} size={12}>
                    <Stack size={1}>
                        <Avatar alt="" src="https://dummyjson.com/icon/michaelw/128" />
                    </Stack>
                    <Grid container size={11} direction={'column'}>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 10px 0", display: "flex", alignItems: "center", p: "10px", bgcolor: grey[50], border: "1px solid green" }}><Typography variant="subtitle1" color="black">Sorry, I just back !</Typography></Stack>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 10px 0", display: "flex", alignItems: "center", p: "10px", bgcolor: grey[50], border: "1px solid green" }}><Typography variant="subtitle1" color="black">It seems like you are from Mac OS world. There is no /Users/ folder on linux 😄</Typography></Stack>
                    </Grid>
                </Grid>
                <Grid container direction={'row-reverse'} spacing={1} size={12}>
                    <Stack size={1}>
                        <Avatar alt="" src="https://dummyjson.com/icon/jamesd/128" />
                    </Stack>
                    <Grid container size={11} display={"flex"} alignItems={"flex-end"} direction={'column'}>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 0 10px", display: "flex", alignItems: "center", p: "10px", bgcolor: green[800], }}><Typography variant="subtitle1" color="white">Good Morning !</Typography></Stack>
                        <Stack width={{xs:"200px",md:"max-content"}} sx={{ borderRadius: "10px 10px 0 10px", display: "flex", alignItems: "center", p: "10px", bgcolor: green[800], }}><Typography variant="subtitle1" color="white">There are many variations of passages of Lorem Ipsum available.</Typography></Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display={"flex"} size={12} borderRadius={2} padding={2}>

                <Stack sx={{ flexGrow: 1 }}>
                    <Paper
                        component="form"
                        sx={{ p: '20px 4px', display: 'flex', alignItems: 'center' }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Type something here..."
                            inputProps={{ 'aria-label': 'Type something here...' }}
                            fullWidth
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                            <CameraAltIcon />

                        </IconButton>
                        <IconButton sx={{ p: '10px' }} aria-label="directions">

                            <AttachFileIcon />


                        </IconButton>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                            <MicNoneIcon />

                        </IconButton>
                        <IconButton color="success" sx={{ p: '10px' }} aria-label="directions">

                            <SendIcon />


                        </IconButton>
                    </Paper>
                </Stack>
            </Grid>




        </Grid>
    )
}

export default MessageContent