import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});



const rows = [
  createData('A01','THE FOUR SKILLS FOR COMMUNICATION', 16, 50,66,100,'C'),
  createData('A02', 'MODERN PROSE AND DRAMA', 17, 60,77,100,'B'),
  createData('MAL1A01(2A)', 'MALAYALABHASHAYUM SAHITHYAVUM-I', 16.0,60, 66,100,'C'),
  createData('BCS1B01', 'PROBLEM SOLVING USING C', 18, 67, 85,100,'A'),
  createData('MAT1C01','MATHEMATICS', 19, 63, 82,100,'A'),
  createData('PH1C01','PROPERTIES OF MATTER AND THERMODYNAMICS',19,70,89,100,'A')
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div>
      <Typography><h1>Result of:  1 Semester</h1></Typography>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Course Code</TableCell>
            <TableCell align="right">Course Title</TableCell>
            <TableCell align="right">CA Mark</TableCell>
            <TableCell align="right">SEE Mark</TableCell>
            
            <TableCell align="right">Total Mark</TableCell>
            <TableCell align="right">Max Mark</TableCell>
         
            <TableCell align="right">Grade</TableCell>
           
           
         
          </TableRow>

        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.n}</TableCell>
              <TableCell align="right">{row.p}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
