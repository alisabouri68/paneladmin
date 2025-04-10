"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useState } from 'react';
import { useEffect } from 'react';

export default function AvatarG() {
    const [data, setData] =useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/users').then(res => res.json()).then(datas => setData(datas))
    }, [])
    return (
        <AvatarGroup total={30}>
            {data.users && data.users.map((item , i)=>{
                return(

                    <Avatar key={i} alt={item.firstName} src={item.image} />
                )
            })

            }

        </AvatarGroup>
    );
}