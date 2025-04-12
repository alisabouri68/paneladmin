"use client"
import React, { useEffect } from 'react'
import { Box } from '@mui/material';
import Login from '../registery/Login';
import { UseModalStore } from '@/app/store/IsModal';
import { useLoginStore } from "@/app/store/IsLogin";

function Modal({ children }) {
  const { isLoggedIn, login, logout } = useLoginStore();
  const { isModal, setIsModal } = UseModalStore()

  // useEffect(() => {
  //   if (isModal) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [isModal]);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsModal(true);
    } else {
      setIsModal(false);
    }
  }, []);

  return (


    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="100vw"
      sx={{
        zIndex: '10'
      }}
      position="sticky"
      top="0"
      right="0"
      left="0"
    >
      {!isLoggedIn ? <Login /> : children}
    </Box>



  )
}

export default Modal