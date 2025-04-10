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

function createData(Channel, Sessions, Period, Change) {
    return { Channel, Sessions, Period, Change };
}

const rows = [
    createData('Organic search', "10853(52%)", "52.80%", "566(92%)"),
    createData('Direct', "2545(47%)", "47.54%", "498(81%)"),
    createData('Referal', "1836(38%)", "41.12%", "455(74%)"),
    createData('Email', "1958(31%)", "36.82%", "361(61%)"),
    createData('Social', "10853(52%)", "52.80%", "566(92%)"),
];

export default function TableBrowser() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Channel</StyledTableCell>
                        <StyledTableCell align="right">Sessions</StyledTableCell>
                        <StyledTableCell align="right">Prev.Period</StyledTableCell>
                        <StyledTableCell align="right">% Change</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.Channel}>
                            <StyledTableCell component="th" scope="row">
                                {row.Channel}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.Sessions}</StyledTableCell>
                            <StyledTableCell align="right">{row.Period}</StyledTableCell>
                            <StyledTableCell align="right">{row.Change}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}