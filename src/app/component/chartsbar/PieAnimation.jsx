"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
export default function PieAnimation() {
  return (
    <Box sx={{ width: '100%',position :"sticky",top:"0",left:"0",right:"0" }}>
      <PieChart
        height={300}
        series={[
          {
            data:[
              { id: 0, value: 10, label: 'A' },
              { id: 1, value: 15, label: 'B' },
              { id: 2, value: 20, label: 'C' },
            ].slice(0, 5),
            innerRadius: 80,
            arcLabel: (params) => params.label ?? '',
            arcLabelMinAngle: 50,
          },
        ]}
      />
    </Box>
  );
}