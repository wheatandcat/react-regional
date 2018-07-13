import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import MuiPaper from "@material-ui/core/Paper";

export default () => (
  <Root>
    <Typography variant="display3" gutterBottom>
      Welcome !!
    </Typography>
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
