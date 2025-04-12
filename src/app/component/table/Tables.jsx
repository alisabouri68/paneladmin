"use client";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaChrome, FaOpera, FaInternetExplorer, FaEdge } from "react-icons/fa";
import { Grid, useMediaQuery } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        [theme.breakpoints.down('sm')]: {
            padding: '8px',
            fontSize: '12px'
        }
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        [theme.breakpoints.down('sm')]: {
            padding: '8px',
            fontSize: '12px'
        }
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const createData = (name, Sessions, BounceRate, Transactions) => {
    return { name, Sessions, BounceRate, Transactions };
};

const rowss = [
    createData("Organic search", "10853(52%)", "52.80%", "566(92%)"),
    createData("Direct", "2545(47%)", "47.54%", "498(81%)"),
    createData("Referal", "1836(38%)", "41.12%", "455(74%)"),
    createData("Email", "1958(31%)", "36.82%", "361(61%)"),
    createData("Social", "10853(52%)", "52.80%", "566(92%)")
];

export default function Tables() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
                <TableContainer
                    component={Paper}
                    sx={{
                        width: '100%',
                        overflowX: 'auto',
                        display: 'block',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                >
                    <Table
                        sx={{
                            minWidth: { xs: 350, md: 800 },
                            '& .MuiTableCell-root': {
                                whiteSpace: 'nowrap'
                            }
                        }}
                        aria-label="customized table"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Browser</StyledTableCell>
                                <StyledTableCell align="right">Sessions</StyledTableCell>
                                <StyledTableCell align="right">Bounce Rate</StyledTableCell>
                                <StyledTableCell align="right">Transactions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowss.map((row, index) => (
                                <StyledTableRow key={`${row.name}-${index}`}>
                                    <StyledTableCell component="th" scope="row">
                                    {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.Sessions}</StyledTableCell>
                                    <StyledTableCell align="right">{row.BounceRate}</StyledTableCell>
                                    <StyledTableCell align="right">{row.Transactions}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}













