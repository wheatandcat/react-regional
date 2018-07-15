---
id: query
title: <Query />
sidebar_label: <Query />
---

## Query

Query is a component for getting data from GraphQL server.

## Examples

### Get list

```:js
import React from "react";
import { gql, Query } from "react-regional";

const query = gql`
    {
        users {
            id
            name
        }
    }
`;

export default props => (
    <Query query={query}>
        {result => {
            if (result.loading) {
                return null;
            }

            return (
                <div>
                    {result.data.users.map((user, index) => (
                        <div key={index}>{user.name}</div>
                    ))}
                </div>
            )
        }}
    </Query>
)
```


### Get single recode

```:js
import React from "react";
import { gql, Query } from "react-regional";

const query = gql`
    query User($id: ID) {
        user(where: { id: $id }) {
            id
            name
        }
    }
`;

export default props => (
    <Query query={query} variables={{ id: 1 }}>
            {result => {
                if (result.loading) {
                    return null;
                }

                return (
                    <div>
                        {result.data.user.name}
                    </div>
                )
            }}
    </Query>
)
```

### Cache and Refetch

```:js
  render() {
    return (
        <Query query={query} cache>
            {result => {
                return (
                    <div>
                        <div>
                            {result.data.user.name}
                        </div>
                        <div>
                            <button onClick={result.onRefetch}>Refetch</button>
                        </div>
                    </div>
                );
            }}
        </Query>
```




## Props

| Name | Type | Default | Description |
----|----|----|---- 
| query | Gql | - | Set the GraphQL query. |
| variables | object | {} | Set the GraphQL variables. |
| cache | boolean | false | If true, same query return same response. |

## Render prop function

The Query return results.

```:js
    <Query query={query} variables={{ id: 1 }}>
            {result => {
                console.log(result); // ← this !
```

| Name | Type | Default | Description |
----|----|----|---- 
| data | any | null | Return on GraphQL response data. |
| loading | boolean | false | If true, The http response is fetching. |
| error | any | undefined | Return on request error and GraphQL error.  |
| onRefetch | () => void | - | The refetch is a function to refetch the same request. |

