---
id: gql
title: gql
sidebar_label: gql
---

## gql
gql is a function for declaring queries.
The GraphQL sever access by query for this use.
It is used to throw queries to the GraphQL server.

## Examples

```:js
import { gql } from "react-regional";

const query = gql`
  {
    users {
      id
      name
    }
  }
`;
```
