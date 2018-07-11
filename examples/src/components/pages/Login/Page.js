import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import MuiPaper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default props => (
  <Root>
    <Typography variant="display3" gutterBottom>
      Login
    </Typography>
    <Paper>
      <InputForm>
        <div>
          example login from !! <b>(example: name=foo & password=foo)</b>
        </div>
      </InputForm>
      <InputForm>
        <TextField
          id="name"
          name="name"
          label="Name"
          margin="normal"
          style={{ width: 200 }}
        />
      </InputForm>
      <InputForm>
        <TextField
          id="password-input"
          name="Password"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          style={{ width: 200 }}
        />
      </InputForm>
      <br />
      <br />
      <InputForm>
        <Button variant="contained" color="primary">
          LOGIN
        </Button>
      </InputForm>
    </Paper>
  </Root>
);

const Root = styled.div`
  padding: 1rem;
`;

const Paper = styled(MuiPaper)`
  padding: 5rem;
`;

const InputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
