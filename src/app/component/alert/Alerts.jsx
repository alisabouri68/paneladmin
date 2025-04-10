"use client"
import React from 'react'
import { UseAlertStore } from '@/app/store/Alert'
import { Alert } from '@mui/material'

function Alerts() {
    const { isAlert, alertContent,alertColor } = UseAlertStore()
    return (
        <>
            {
                isAlert && <Alert sx={{position:"relative",zIndex:"200" }} variant="filled" severity={alertColor}>{alertContent}</Alert>
            }
        </>
    )
}

export default Alerts