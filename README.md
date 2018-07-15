# react-regional

![image](./docs/top.png)

## Intro

react-regional is graphQL simple react client.

## Installation

```
npm install react-reginal
```

## Documents

 * https://wheatandcat.github.io/react-regional/

## 

## Examples

```:js
import React from "react";
import { render } from "react-dom";
import { RegionalProvider, Query, gql } from "react-reginal";

var query = gql`
    {
        users {
            id
            name
        }
    }
`;

const Page = (({ users })) => (
    <div>
        {users.map((user, index) => (
            <div key={index}>{user.name}</div>
        ))}
    </div>
)

const App = () => (
    <RegionalProvider uri="http://localhost:4466/">
        <Query query={query}>
            {result => {
                if (result.loading) {
                    return null;
                }

                return <Page users={result.data.users} />;
            }}
        </Query>
    </RegionalProvider>
)

render(<App />, document.getElementById("root"));
```