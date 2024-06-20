# grist-js

A Typescript client for interacting with the Grist API, 
generated from the OpenAPI specification.

## Motivation

A basic client already exists here (https://github.com/gristlabs/grist-api), but
it's missing a bunch of methods that I needed, so I generated one from an OpenAPI
schema I grabbed from [here](https://github.com/gristlabs/grist-help/blob/master/api/grist.yml) instead.

## Installation

You can install this package using npm, yarn, or bun:
```typescript
bun add grist-js
```

## Usage
```typescript
import { createClient } from 'grist-js';

const client = createClient({
	BASE: 'https://mygristdeployment.com',
	TOKEN: 'myapitoken'
})

const tables = await client.listTables({ docId: 'my-doc-id' })
```
