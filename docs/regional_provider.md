---
id: regional_provider
title: <RegionalProvider />
sidebar_label: <RegionalProvider />
---

## RegionalProvider

RegionalProvider is root component of react-regional compornents.
This set fetch url host and headers.
RegionalProvider provide GraphQL sever connectinon.

## example

```:js
import React from "react";
import { RegionalProvider } from "react-regional";

export default props => (
  <RegionalProvider uri="http://localhost:4466/">
    {props.children}
  </RegionalProvider>
);
```

## Props

| Name | Type | Default | Description |
----|----|----|---- 
| uri | string | - | Set the base url to access for GraphQL server. |
| hedders | object | {} | Set the request header for GraphQL server. |

