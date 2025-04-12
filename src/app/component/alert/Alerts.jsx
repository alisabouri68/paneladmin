"use client"
import React from 'react'
import { UseAlertStore } from '@/app/store/Alert'
import { Alert } from '@mui/material'

function Alerts() {
    const { isAlert, alertContent, alertColor } = UseAlertStore()

    return (
        <>

            <Alert
                sx={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    position: "fixed",
                    zIndex: 99999,
                    top: 50,
                    left: '50%',
                    transform: isAlert
                        ? 'translate(-50%, 0)'
                        : 'translate(-2000px, 0)',
                    minWidth: 300,
                    maxWidth: '90vw',
                    width: 'auto',
                    padding: { xs: 2, sm: 3 },
                    fontSize: { xs: 16, sm: 20, md: 25 },
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: 6,
                    borderRadius: 2
                }}
                variant="filled"
                severity={alertColor}
            >
                {alertContent}
            </Alert>

        </>
    )
}

export default Alerts