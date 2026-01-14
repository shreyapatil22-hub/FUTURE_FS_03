# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListCoffeeDrinks*](#listcoffeedrinks)
  - [*GetCafeById*](#getcafebyid)
- [**Mutations**](#mutations)
  - [*CreateFavoriteOrder*](#createfavoriteorder)
  - [*UpdateUserFavoriteCafe*](#updateuserfavoritecafe)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListCoffeeDrinks
You can execute the `ListCoffeeDrinks` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCoffeeDrinks(): QueryPromise<ListCoffeeDrinksData, undefined>;

interface ListCoffeeDrinksRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCoffeeDrinksData, undefined>;
}
export const listCoffeeDrinksRef: ListCoffeeDrinksRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCoffeeDrinks(dc: DataConnect): QueryPromise<ListCoffeeDrinksData, undefined>;

interface ListCoffeeDrinksRef {
  ...
  (dc: DataConnect): QueryRef<ListCoffeeDrinksData, undefined>;
}
export const listCoffeeDrinksRef: ListCoffeeDrinksRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCoffeeDrinksRef:
```typescript
const name = listCoffeeDrinksRef.operationName;
console.log(name);
```

### Variables
The `ListCoffeeDrinks` query has no variables.
### Return Type
Recall that executing the `ListCoffeeDrinks` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCoffeeDrinksData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCoffeeDrinksData {
  coffeeDrinks: ({
    id: UUIDString;
    name: string;
    description: string;
    basePrice: number;
    imageUrl?: string | null;
    category?: string | null;
  } & CoffeeDrink_Key)[];
}
```
### Using `ListCoffeeDrinks`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCoffeeDrinks } from '@dataconnect/generated';


// Call the `listCoffeeDrinks()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCoffeeDrinks();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCoffeeDrinks(dataConnect);

console.log(data.coffeeDrinks);

// Or, you can use the `Promise` API.
listCoffeeDrinks().then((response) => {
  const data = response.data;
  console.log(data.coffeeDrinks);
});
```

### Using `ListCoffeeDrinks`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCoffeeDrinksRef } from '@dataconnect/generated';


// Call the `listCoffeeDrinksRef()` function to get a reference to the query.
const ref = listCoffeeDrinksRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCoffeeDrinksRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.coffeeDrinks);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.coffeeDrinks);
});
```

## GetCafeById
You can execute the `GetCafeById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCafeById(vars: GetCafeByIdVariables): QueryPromise<GetCafeByIdData, GetCafeByIdVariables>;

interface GetCafeByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCafeByIdVariables): QueryRef<GetCafeByIdData, GetCafeByIdVariables>;
}
export const getCafeByIdRef: GetCafeByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCafeById(dc: DataConnect, vars: GetCafeByIdVariables): QueryPromise<GetCafeByIdData, GetCafeByIdVariables>;

interface GetCafeByIdRef {
  ...
  (dc: DataConnect, vars: GetCafeByIdVariables): QueryRef<GetCafeByIdData, GetCafeByIdVariables>;
}
export const getCafeByIdRef: GetCafeByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCafeByIdRef:
```typescript
const name = getCafeByIdRef.operationName;
console.log(name);
```

### Variables
The `GetCafeById` query requires an argument of type `GetCafeByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCafeByIdVariables {
  cafeId: UUIDString;
}
```
### Return Type
Recall that executing the `GetCafeById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCafeByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCafeByIdData {
  cafe?: {
    id: UUIDString;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    description?: string | null;
    imageUrl?: string | null;
    phoneNumber?: string | null;
    website?: string | null;
  } & Cafe_Key;
}
```
### Using `GetCafeById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCafeById, GetCafeByIdVariables } from '@dataconnect/generated';

// The `GetCafeById` query requires an argument of type `GetCafeByIdVariables`:
const getCafeByIdVars: GetCafeByIdVariables = {
  cafeId: ..., 
};

// Call the `getCafeById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCafeById(getCafeByIdVars);
// Variables can be defined inline as well.
const { data } = await getCafeById({ cafeId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCafeById(dataConnect, getCafeByIdVars);

console.log(data.cafe);

// Or, you can use the `Promise` API.
getCafeById(getCafeByIdVars).then((response) => {
  const data = response.data;
  console.log(data.cafe);
});
```

### Using `GetCafeById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCafeByIdRef, GetCafeByIdVariables } from '@dataconnect/generated';

// The `GetCafeById` query requires an argument of type `GetCafeByIdVariables`:
const getCafeByIdVars: GetCafeByIdVariables = {
  cafeId: ..., 
};

// Call the `getCafeByIdRef()` function to get a reference to the query.
const ref = getCafeByIdRef(getCafeByIdVars);
// Variables can be defined inline as well.
const ref = getCafeByIdRef({ cafeId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCafeByIdRef(dataConnect, getCafeByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cafe);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cafe);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateFavoriteOrder
You can execute the `CreateFavoriteOrder` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createFavoriteOrder(vars: CreateFavoriteOrderVariables): MutationPromise<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;

interface CreateFavoriteOrderRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateFavoriteOrderVariables): MutationRef<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;
}
export const createFavoriteOrderRef: CreateFavoriteOrderRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createFavoriteOrder(dc: DataConnect, vars: CreateFavoriteOrderVariables): MutationPromise<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;

interface CreateFavoriteOrderRef {
  ...
  (dc: DataConnect, vars: CreateFavoriteOrderVariables): MutationRef<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;
}
export const createFavoriteOrderRef: CreateFavoriteOrderRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createFavoriteOrderRef:
```typescript
const name = createFavoriteOrderRef.operationName;
console.log(name);
```

### Variables
The `CreateFavoriteOrder` mutation requires an argument of type `CreateFavoriteOrderVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateFavoriteOrderVariables {
  coffeeDrinkId: UUIDString;
  userId: UUIDString;
  name: string;
}
```
### Return Type
Recall that executing the `CreateFavoriteOrder` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateFavoriteOrderData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateFavoriteOrderData {
  favoriteOrder_insert: FavoriteOrder_Key;
}
```
### Using `CreateFavoriteOrder`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createFavoriteOrder, CreateFavoriteOrderVariables } from '@dataconnect/generated';

// The `CreateFavoriteOrder` mutation requires an argument of type `CreateFavoriteOrderVariables`:
const createFavoriteOrderVars: CreateFavoriteOrderVariables = {
  coffeeDrinkId: ..., 
  userId: ..., 
  name: ..., 
};

// Call the `createFavoriteOrder()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createFavoriteOrder(createFavoriteOrderVars);
// Variables can be defined inline as well.
const { data } = await createFavoriteOrder({ coffeeDrinkId: ..., userId: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createFavoriteOrder(dataConnect, createFavoriteOrderVars);

console.log(data.favoriteOrder_insert);

// Or, you can use the `Promise` API.
createFavoriteOrder(createFavoriteOrderVars).then((response) => {
  const data = response.data;
  console.log(data.favoriteOrder_insert);
});
```

### Using `CreateFavoriteOrder`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createFavoriteOrderRef, CreateFavoriteOrderVariables } from '@dataconnect/generated';

// The `CreateFavoriteOrder` mutation requires an argument of type `CreateFavoriteOrderVariables`:
const createFavoriteOrderVars: CreateFavoriteOrderVariables = {
  coffeeDrinkId: ..., 
  userId: ..., 
  name: ..., 
};

// Call the `createFavoriteOrderRef()` function to get a reference to the mutation.
const ref = createFavoriteOrderRef(createFavoriteOrderVars);
// Variables can be defined inline as well.
const ref = createFavoriteOrderRef({ coffeeDrinkId: ..., userId: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createFavoriteOrderRef(dataConnect, createFavoriteOrderVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favoriteOrder_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favoriteOrder_insert);
});
```

## UpdateUserFavoriteCafe
You can execute the `UpdateUserFavoriteCafe` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserFavoriteCafe(vars: UpdateUserFavoriteCafeVariables): MutationPromise<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;

interface UpdateUserFavoriteCafeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserFavoriteCafeVariables): MutationRef<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;
}
export const updateUserFavoriteCafeRef: UpdateUserFavoriteCafeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserFavoriteCafe(dc: DataConnect, vars: UpdateUserFavoriteCafeVariables): MutationPromise<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;

interface UpdateUserFavoriteCafeRef {
  ...
  (dc: DataConnect, vars: UpdateUserFavoriteCafeVariables): MutationRef<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;
}
export const updateUserFavoriteCafeRef: UpdateUserFavoriteCafeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserFavoriteCafeRef:
```typescript
const name = updateUserFavoriteCafeRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserFavoriteCafe` mutation requires an argument of type `UpdateUserFavoriteCafeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserFavoriteCafeVariables {
  userId: UUIDString;
  cafeId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `UpdateUserFavoriteCafe` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserFavoriteCafeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserFavoriteCafeData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserFavoriteCafe`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserFavoriteCafe, UpdateUserFavoriteCafeVariables } from '@dataconnect/generated';

// The `UpdateUserFavoriteCafe` mutation requires an argument of type `UpdateUserFavoriteCafeVariables`:
const updateUserFavoriteCafeVars: UpdateUserFavoriteCafeVariables = {
  userId: ..., 
  cafeId: ..., // optional
};

// Call the `updateUserFavoriteCafe()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserFavoriteCafe(updateUserFavoriteCafeVars);
// Variables can be defined inline as well.
const { data } = await updateUserFavoriteCafe({ userId: ..., cafeId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserFavoriteCafe(dataConnect, updateUserFavoriteCafeVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserFavoriteCafe(updateUserFavoriteCafeVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserFavoriteCafe`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserFavoriteCafeRef, UpdateUserFavoriteCafeVariables } from '@dataconnect/generated';

// The `UpdateUserFavoriteCafe` mutation requires an argument of type `UpdateUserFavoriteCafeVariables`:
const updateUserFavoriteCafeVars: UpdateUserFavoriteCafeVariables = {
  userId: ..., 
  cafeId: ..., // optional
};

// Call the `updateUserFavoriteCafeRef()` function to get a reference to the mutation.
const ref = updateUserFavoriteCafeRef(updateUserFavoriteCafeVars);
// Variables can be defined inline as well.
const ref = updateUserFavoriteCafeRef({ userId: ..., cafeId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserFavoriteCafeRef(dataConnect, updateUserFavoriteCafeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

