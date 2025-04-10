"use client";
import { Grid } from "@mui/material";
import React from "react";
import CardTop from "./component/home/CardTop";
import Chartss from "./component/chartsbar/Chartss";
import Chartsss from "./component/chartsbar/Chartsss";
import AvatarG from "./component/home/avatar/AvatarG";
import Contacts from "./component/contacts/Contacts";
import Progresss from "./component/home/Progresss";
import BorderRadius from "./component/home/BorderRadius";

function Home() {
  const data = [
    {
      title: "New Customers",
      percent: 15,
      value: "26",
      buttom: <AvatarG />,
      id: 1,
    },
    {
      title: "Market Share",
      percent: 80,
      value: "2000000",
      buttom: null,
      id: 2,
    },
    {
      title: "Total Orders",
      percent: 7.2,
      value: "34000",
      buttom: <Chartsss />,
      id: 3,
    },
    {
      title: "Weekly Sales",
      percent: 2.7,
      value: "92000",
      buttom: <Chartss />,
      id: 4,
    },
  ];
  return (
    <Grid container minHeight="75vh" component={"main"} spacing={2}>
      <Grid container spacing={2} size={12} boxShadow={2}>
        {data &&
          data.map((item) => {
            return (
              <CardTop
                key={item.id}
                title={item.title}
                percent={item.percent}
                value={item.value}
                buttom={item.buttom}
              />
            );
          })}
      </Grid>
      <Grid container size={12} boxShadow={3} spacing={2}>
        <Grid container padding={2} size={{ xs: 12, md: 3 }} boxShadow={3}>
          <BorderRadius />
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          size={{ xs: 12, md: 3 }}
          boxShadow={3}
        >
          <Progresss />
        </Grid>
        <Contacts />
      </Grid>
      <Grid container size={12} boxShadow={3}></Grid>
    </Grid>
  );
}

export default Home;
