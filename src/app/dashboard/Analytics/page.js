import { Grid } from "@mui/material";
import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PercentIcon from "@mui/icons-material/Percent";
import CardInfo from "@/app/component/cardinfo/CardInfo";
import ChartLines from "@/app/component/chartLines/ChartLines";
import Chartbars from "@/app/component/chartsbar/Chartbars";
import Tables from "@/app/component/table/Table";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TableBrowser from "@/app/component/table/TableBrowser";
function page() {
  const cardinfo = [
    {
      t1: "Sessions",
      t2: "24k",
      t3: "8.5%",
      t4: "New Sessions Today",
      icon: <DiamondIcon sx={{ fontSize: 40 }} />,
      color: "success",
    },
    {
      t1: "Avg.Sessions",
      t2: "00:18",
      t3: "1.5%",
      t4: "Weekly Avg.Sessions",
      icon: <AccessTimeIcon sx={{ fontSixe: 40 }} />,
      color: "success",
    },
    {
      t1: "Bounce Rate",
      t2: "36.45%",
      t3: "8%",
      t4: "Up Bounce Rate Weekly",
      icon: <PercentIcon sx={{ fontSixe: 40 }} />,
      color: "error",
    },
  ];
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData([<AcUnitIcon />, "Frozen yoghurt"], 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Grid padding="10px 10px" component={"main"} container direction={"column"} spacing={3} size={{ xs: 12 }} minHeight="75vh" boxShadow={3}>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {cardinfo &&
          cardinfo.map((item) => {
            return (
              <CardInfo
                t1={item.t1}
                t2={item.t2}
                t3={item.t3}
                t4={item.t4}
                icon={item.icon}
                color={item.color}
              />
            );
          })}
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container boxShadow={3} size={{ xs: 12, md: 8 }}>
          <ChartLines />
        </Grid>
        <Grid container boxShadow={3} size={{ xs: 12, md: 4 }}>
          <Chartbars />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container boxShadow={3} size={{ xs: 12, md: 6 }}>
          <TableBrowser />
        </Grid>
        <Grid container boxShadow={3} size={{ xs: 12, md: 6 }}>
          <Tables xxxx={rows} />
        </Grid>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
}

export default page;
