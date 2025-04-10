"use client"
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useResizeDetector } from 'react-resize-detector';

export default function ChartLines() {
    const { width, height, ref } = useResizeDetector();

    return (
        <div ref={ref} style={{ width: '100%', height: '400px' }}>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        area: true,
                        color: 'green',
                        areaStyle: { fill: 'rgba(33, 150, 243, 0.2)' },
                    },
                ]}
                width={width}
                height={height}
            />
        </div>
    );
}