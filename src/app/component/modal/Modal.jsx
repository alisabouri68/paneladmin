"use client"
import React, { useEffect } from 'react'
import { Box } from '@mui/material';
import Login from '../registery/Login';
import { UseModalStore } from '@/app/store/IsModal';
import { useLoginStore } from "@/app/store/IsLogin";

function Modal() {
  const { isLoggedIn, login, logout } = useLoginStore();
  const { isModal,setIsModal } = UseModalStore()
  useEffect(() => {
    if (!isLoggedIn) {
      setIsModal(true);
    } else {
      setIsModal(false);
    }
  }, []);
  return (
    <>
      {
        isModal &&
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          minWidth="100vw"
          sx={{ backgroundColor: 'var(--background)', zIndex: '100' }}
          position="absolute"
          top="0"
          right="0"
          left="0"
        >
          <Login />
        </Box>
      }
    </>

  )
}

export default Modal