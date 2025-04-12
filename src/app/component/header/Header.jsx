"use client"
import { Avatar, Badge, Grid, IconButton, InputBase, Paper, Stack } from '@mui/material'
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { UseThemeStore } from '@/app/store/Theme';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { UseNaveOpenStore } from '@/app/store/NavIsOpen';
import AccountMenu from './AccountMenu';

function Header() {
    const { isOpen, setIsOpen } = UseNaveOpenStore()
    const { isDark, setIsDark } = UseThemeStore()
    return (
        // <Container>
        <Grid boxShadow={3} padding="20px 10px" display={"flex"} alignItems={"center"} size1={12} justifyContent={"space-between"}>
            <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"center"}>
                <IconButton aria-label="delete" size="large" onClick={setIsOpen}>
                    {isOpen ? <MenuOpenIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
                </IconButton>
            </Stack>
            <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"center"} >
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: { xs: 'none', md: 'flex' }, alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <IconButton aria-label="delete" size="large" onClick={setIsDark}>
                    {isDark ? <DarkModeIcon fontSize="inherit" /> : <LightModeIcon fontSize="inherit" />}
                </IconButton>
                <Badge badgeContent={4} color="error" >
                    <NotificationsIcon color="action" sx={{ fontSize: 30 }} />
                </Badge>
                {/* <Avatar
                    alt="AliEmamiSabouri"
                    src="https://dummyjson.com/icon/michaelw/128"
                /> */}
                <AccountMenu />

            </Stack>
        </Grid >
        // </Container>
    )
}

export default Header