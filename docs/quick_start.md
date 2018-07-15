---
id: quick_start
title: Quick Start
sidebar_label: Quick Start
---

## Setup

install with npm

```:sh
npm install react-reginal
```

## Souce code

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
