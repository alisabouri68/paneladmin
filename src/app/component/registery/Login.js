"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { IoLogoFacebook } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../../public/logo-sm.png";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import { blue, grey, lightGreen, pink } from "@mui/material/colors";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { UseAlertStore } from "@/app/store/Alert";
import { useLoginStore } from "@/app/store/IsLogin";
import { UseModalStore } from "@/app/store/IsModal";
function Login() {
  const { isLoggedIn, login, logout } = useLoginStore();
  const {setIsModal } = UseModalStore();
  const {setIsAlert,setAlertContent,setAlertColor } = UseAlertStore();
  const [userName, setUserName] = useState("aliEmamiSabouri");
  const [password, setPassword] = useState("0682440016");
  useEffect(() => {
    if (isLoggedIn) {
      setIsModal(false);
    } else {
      setIsModal(true);
    }
  }, []);
  const submitHandler = () => {
    if (userName === "aliEmamiSabouri" && password === "0682440016") {
      setAlertContent(" You have successfully logged in")
      setAlertColor("success")
      setIsAlert();
      setTimeout(() => {
        login();
        setIsModal(false);
        setIsAlert();
      }, 5000);
    } else {
      logout();
    }
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="100vw"
      sx={{ backgroundColor: "transparent" ,position:"relative",zIndex:"150"}}
      border="1px solid blue"
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
            <h3>Let's Get Started Rizz</h3>
          </Stack>
          <Stack
            alignItems="center"
            fontWeight="bold"
            color="gray"
            fontSize="14px"
          >
            <h3>Sign in to continue to Rizz.</h3>
          </Stack>
        </Grid>
        <Grid
          item
          display="grid"
          gap="10px"
          padding="10px 20px"
          sx={{ backgroundColor: "white" }}
        >
          <TextField
            size="small"
            color="success"
            fullWidth
            label="Username"
            id="fullWidth"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <TextField
            size="small"
            fullWidth
            color="success"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            fontWeight="bold"
            color="gray"
            fontSize="14px"
          >
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
            >
              <div>
                <Switch defaultChecked color="success" size="small" />
              </div>
              <div>
                <Typography variant="caption" gutterBottom>
                  Remember me
                </Typography>
              </div>
            </Stack>
            <div>
              <Link href="#">
                <Typography variant="caption" gutterBottom>
                  Forgot password?
                </Typography>
              </Link>
            </div>
          </Stack>
          <Button
            size="large"
            color="success"
            fullWidth
            variant="contained"
            endIcon={<CiLogin />}
            onClick={submitHandler}
          >
            Login
          </Button>
          <Box>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={3}
            >
              <Stack margin="8px 0 0 0">
                <Typography
                  variant="caption"
                  sx={{ color: grey[500] }}
                  gutterBottom
                  fontWeight="bold"
                >
                  Don't have an account ?
                </Typography>
              </Stack>
              <Stack>
                <Link href="#">
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="success"
                    fontSize={13}
                    fontWeight={"bold"}
                  >
                    Free Resister
                  </Typography>
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="subtitle1" gutterBottom textAlign={"center"}>
                Or Login With
              </Typography>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={3}
            >
              <Link href="#">
                <Avatar sx={{ bgcolor: blue[200] }}>
                  <IoLogoFacebook />
                </Avatar>
              </Link>
              <Avatar sx={{ bgcolor: pink[200] }}>
                <FaGoogle />
              </Avatar>
              <Avatar sx={{ bgcolor: lightGreen["A400"] }}>
                <FaTwitter />
              </Avatar>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
