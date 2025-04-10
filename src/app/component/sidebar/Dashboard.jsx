"use client"
import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { UseAccordionStore } from '@/app/store/navAccordion';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { green, grey } from '@mui/material/colors';
import { UseNaveOpenStore } from '@/app/store/NavIsOpen';
function Dashboard({ li, icons, children, index }) {
    const { isIndex, setIsIndex } = UseAccordionStore()
    const { isOpen, setIsOpen } = UseNaveOpenStore()
    const handleClick = () => {
        setIsIndex(index);
    };
    return (
        <>
            <ListItemButton onClick={()=>handleClick(index)}>
                <ListItemIcon>
                    {icons}
                </ListItemIcon>
                <ListItemText primary={isOpen&&li} color='success'  sx={isIndex === index ?{ color:green[500]}:{ color:grey[500]}}/>
                {isIndex === index&&isOpen ? <ExpandMore />: isOpen? <KeyboardArrowRightIcon />:null}
            </ListItemButton>
            {children}
        </>
    )
}

export default Dashboard