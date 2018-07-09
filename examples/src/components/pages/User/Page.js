import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default props => (
  <Root>
    <Typography variant="display3" gutterBottom>
      User Detail
    </Typography>
    <Paper style={{ width: 300 }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              style={{ backgroundColor: "#eeeeee", width: 30 }}
            >
              id
            </TableCell>
            <TableCell>{props.user.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              style={{ backgroundColor: "#eeeeee", width: 30 }}
            >
              name
            </TableCell>
            <TableCell>{props.user.name}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </Root>
);

const Root = styled.div`
  padding: 1rem;
`;
