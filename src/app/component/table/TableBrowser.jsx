"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaChrome } from "react-icons/fa";
import { FaOpera } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { FaEdge } from "react-icons/fa";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, Sessions, BounceRate, Transactions) {
    return { name, Sessions, BounceRate, Transactions };
}

const rows = [
    createData(<FaChrome fontSize={25}/>, "10853(52%)", "52.80%", "566(92%)"),
    createData(<FaEdge fontSize={25}/>, "2545(47%)", "47.54%", "498(81%)"),
    createData(<FaInternetExplorer fontSize={25}/>, "1836(38%)", "41.12%", "455(74%)"),
    createData(<FaOpera fontSize={25}/>, "1958(31%)", "36.82%", "361(61%)"),
    createData(<FaChrome fontSize={25}/>, "10853(52%)", "52.80%", "566(92%)"),
];

export default function TableBrowser() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Browser</StyledTableCell>
                        <StyledTableCell align="right">Sessions</StyledTableCell>
                        <StyledTableCell align="right">Bounce Rate</StyledTableCell>
                        <StyledTableCell align="right">Transactions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
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
    );
}