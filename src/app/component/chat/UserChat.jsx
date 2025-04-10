"use client"
import React, { useEffect, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid, Stack } from '@mui/material';
import Messages from './Messages';
import ChildMessage from './ChildMessage';

function UserChat() {
    const [alignment, setAlignment] = useState('Message');
    const [data, setData] = useState()
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    useEffect(() => {
        fetch('https://dummyjson.com/users').then(res => res.json()).then(datas => setData(datas))
    }, [])
    return (
        <Grid container size={12} display={"flex"} direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Stack direction={"row"} width="100%" height={80}>
                <ToggleButtonGroup
                    color="success"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label=""
                    fullWidth
                    sx={{ display: "flex", width: "100%" }} // Full width for the group
                >
                    <ToggleButton sx={{ flexGrow: 1 }} value="Message">Message</ToggleButton>
                    <ToggleButton sx={{ flexGrow: 1 }} value="Active">Active</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Grid container size={12} >
                <Messages>

                    {
                        data && data.users.map((item) => {
                            return (
                                <ChildMessage key={item.id} name={item.firstName} image={item.image} date={item.bank.cardExpire} />
                            )
                        })
                    }
                </Messages>
            </Grid>
        </Grid>
    )
}

export default UserChat;
