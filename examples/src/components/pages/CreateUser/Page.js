import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default props => (
  <Root>
    <Typography variant="display3" gutterBottom>
      Create Users
    </Typography>

    <Form>
      <div>
        <TextField
          id="name"
          name="name"
          label="name"
          margin="normal"
          style={{ width: 150 }}
          onChange={props.onInput}
        />
      </div>
      <div style={{ paddingLeft: 25 }}>
        <Button variant="contained" color="primary" onClick={props.onMutation}>
          Create
        </Button>
      </div>
    </Form>
  </Root>
);

const Root = styled.div`
  padding: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
