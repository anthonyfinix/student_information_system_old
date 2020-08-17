import React, { useContext, useEffect } from 'react';
import { Box, TableContainer, TableRow, TableCell, TableHead, TableBody, Table, Paper } from '@material-ui/core';
import { StudentContext } from '../context';
import { useState } from 'react';
import Loading from '../../../util/loading';

export default () => {
    const [isLoading, setIsLoading] = useState(false);
    const { students, fetchStudents } = useContext(StudentContext);
    useEffect(() => {
        fetchStudents()
            .then((response) => {
                console.log(response)
                setIsLoading(true)
            })
    }, [])

    if (!isLoading) return <Loading/>
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Class</TableCell>
                            <TableCell align="left">Roll</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    {row.class}
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    {row.rollNo}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}