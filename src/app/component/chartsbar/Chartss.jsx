"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function Chartss() {
    return (
        <Stack direction="row" sx={{ width: '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                    plotType="bar"
                    data={[8, 4, 6, 5, 7, 5, 4]}
                    height={100}
                    showTooltip
                    showHighlight
                    xAxis={{
                        scaleType: 'band',
                        data: [
                            "Sunday",
                            "Monday" ,
                            "Tuesday" ,
                            "Wednesday",
                            "Thursday" ,
                            "Friday" ,
                            "Saturday" ,
                        ],
                        
                    }}
                />
            </Box>
        </Stack>
    );
}