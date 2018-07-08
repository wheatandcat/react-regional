import React from "react";
import styled from "styled-components";

export default props => (
  <Root>
    <div>users...</div>
    <div>
      {props.users.map((user, index) => <div key={index}>{user.name}</div>)}
    </div>
  </Root>
);

const Root = styled.div`
  padding: 5rem;
`;
