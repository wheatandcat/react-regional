import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "@reach/router";

export default props => (
  <Root>
    <Typography variant="display3" gutterBottom>
      Users
    </Typography>
    <Paper style={{ width: 600 }}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#eeeeee" }}>
            <TableCell style={{ width: 200 }}>id</TableCell>
            <TableCell>name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link to={`/users/${user.id}`}>{user.id}</Link>
              </TableCell>
              <TableCell>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Root>
);

const Root = styled.div`
  padding: 1rem;
`;
