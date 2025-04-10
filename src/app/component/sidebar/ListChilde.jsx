"use client"
import React from 'react'
import Collapse from '@mui/material/Collapse';
import Link from 'next/link';
import List from '@mui/material/List';
import { UseAccordionStore } from '@/app/store/navAccordion';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { UseNaveOpenStore } from '@/app/store/NavIsOpen';

function ListChilde({ href, lili, index }) {
    const { isOpen, setIsOpen } = UseNaveOpenStore()
    const { isIndex } = UseAccordionStore()


    return (
        <>
            {isOpen ? <Collapse in={isIndex === index ? true : false} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton component={Link} href={href} sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <TripOriginIcon />
                        </ListItemIcon>
                        <ListItemText primary={lili} />
                    </ListItemButton>
                </List>
            </Collapse>:<></>}



        </>
    )
}

export default ListChilde