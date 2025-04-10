"use client"
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Dashboard from './Dashboard';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListChilde from './ListChilde';
import { UseNaveOpenStore } from '@/app/store/NavIsOpen';

export default function MiniDrawer() {
  const { isOpen} = UseNaveOpenStore()
  const items = [
    {
      li: "Dashboards",
      lili: ["Home","Analytics", "Ecommerce"],
      href: ["/","/dashboard/Analytics", "/dashboard/Ecommerce"],
      icons: <HomeFilledIcon />
    },
    {
      li: "Aplication",
      lili: ["Chat"],
      href: ["/Application/Chat"],
      icons: <DashboardIcon />
    },

  ]
  return (
    <List
      sx={{ width: isOpen ? 250 : 0, boxShadow: 3,color:"error", bgcolor: 'background.paper',minHeight:"100vh", height: "100%", transition: 'width .4s ease-in-out', overflow:"hidden"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {isOpen ? "MAIN MENU" : "MENU"}
        </ListSubheader>
      }
    >
      {items && items.map((item, index) => {
        return (
          <Dashboard key={index} li={item.li} index={index} icons={item.icons}>
            {item.lili && item.lili.map((val, i) => {
              return (
                <ListChilde key={i} index={index} lili={val} href={item.href[i]} />
              )
            })}
          </Dashboard>
        )
      })}
    </List>
  );
}
