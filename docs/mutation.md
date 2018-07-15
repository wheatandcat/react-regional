---
id: mutation
title: <Mutation />
sidebar_label: <Mutation />
---

## Mutation

Mutation is a component for updating data from GraphQL server.

### examples

```:js
import React, { Component } from "react";
import { Mutation, gql } from "../../../../../dist/index";

var query = gql`
  mutation CreateUser($name: String!) {
    createUser(data: { name: $name }) {
      id
    }
  }
`;

export default props => (
    <Mutation
        query={query}
        variables={{ name: "foo" }}
    >
        {(onMutation, result) => {
            if (result.loading) {
                return null;
            }

            if (result.data.createUser) {
                return (
                    <div>Created !!</div>
                );
            }

            return (
                <div>
                    <button onClick={onMutation}>
                        Create
                    </button>
                </div>
            );
        }}
    </Mutation>
);
```


### Props

| Name | Type | Default | Description |
----|----|----|---- 
| query | Gql | - | Set the GraphQL query. |
| variables | object | {} | Set the GraphQL variables. |

## Render prop function

The Mutation return results and onMutation.

### onMutation

```:js
            return (
                <div>
                    <button onClick={onMutation}> // ← this !
                        Create
                    </button>
                </div>
            );
```

The onMutation is Mutation to execute function. 

### result

Note: result data is set in after onMutation executed.

```:js
    <Mutation
        query={query}
        variables={{ name: "foo" }}
    >
        {(onMutation, result) => {
                console.log(result); // ← this !
```

| Name | Type | Default | Description |
----|----|----|---- 
| data | any | null | Return on GraphQL response data. |
| loading | boolean | false | If true, The http response is fetching. |
| error | any | undefined | Return on Request Error and GraphQL Error.  |

