import { Button, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from "../../public/logo-sm.png";
import eror from "../../public/error.svg";
import { IoMdRefresh } from "react-icons/io";
import { green } from '@mui/material/colors';
function NotFound() {
    return (

        <Grid
            container
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            minWidth="100vw"
            sx={{ backgroundColor: "black", position: "relative", zIndex: "150" }}
        >
            <Grid
                size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
                item
                boxShadow={3}
                borderRadius="7px"
                overflow="hidden"
                sx={{ backgroundColor: "var(--foreground)" }}
            >
                <Grid
                    item
                    display="grid"
                    gap="5px"
                    padding="10px 0"
                    sx={{ backgroundColor: "black" }}
                >
                    <Stack alignItems="center" fontWeight="bold">
                        <Image src={logo} width={60} height={60} alt="logo" />
                    </Stack>
                    <Stack
                        alignItems="center"
                        fontWeight="bold"
                        color="white"
                        fontSize="22px"
                    >
                        <h3>Oops! Sorry page does not found</h3>
                    </Stack>
                    <Stack
                        alignItems="center"
                        fontWeight="bold"
                        color="gray"
                        fontSize="14px"
                    >
                        <h3>Back to dashboard of Rizz</h3>
                    </Stack>
                </Grid>
                <Grid
                    item
                    display="grid"
                    gap="10px"
                    padding="10px 20px"
                    sx={{ backgroundColor: "white" }}
                >
                    <Stack display={'flex'} alignItems={'center'}>
                        <Image src={eror} width={150} height={150} alt="notfound" />
                    </Stack>
                    <Stack >
                        <Typography variant="h2" color="textSecondary" textAlign={'center'} fontSize={100} fontWeight={"bold"}>404!</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="caption" color="initial" textAlign={'center'} fontWeight={"bold"}>Somthing went wrong</Typography>

                    </Stack>
                    <Stack>
                    <Button href="/" endIcon={<IoMdRefresh />}  variant="contained" color='success'>Back to Dashboard</Button>
                    </Stack>

                </Grid>
            </Grid>
        </Grid>



    )
}

export default NotFound