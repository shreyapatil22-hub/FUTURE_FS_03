import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Cafe_Key {
  id: UUIDString;
  __typename?: 'Cafe_Key';
}

export interface CoffeeDrink_Key {
  id: UUIDString;
  __typename?: 'CoffeeDrink_Key';
}

export interface CreateFavoriteOrderData {
  favoriteOrder_insert: FavoriteOrder_Key;
}

export interface CreateFavoriteOrderVariables {
  coffeeDrinkId: UUIDString;
  userId: UUIDString;
  name: string;
}

export interface CustomizationOption_Key {
  id: UUIDString;
  __typename?: 'CustomizationOption_Key';
}

export interface FavoriteOrderCustomization_Key {
  favoriteOrderId: UUIDString;
  customizationOptionId: UUIDString;
  __typename?: 'FavoriteOrderCustomization_Key';
}

export interface FavoriteOrder_Key {
  id: UUIDString;
  __typename?: 'FavoriteOrder_Key';
}

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

export interface GetCafeByIdVariables {
  cafeId: UUIDString;
}

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

export interface UpdateUserFavoriteCafeData {
  user_update?: User_Key | null;
}

export interface UpdateUserFavoriteCafeVariables {
  userId: UUIDString;
  cafeId?: UUIDString | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateFavoriteOrderRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateFavoriteOrderVariables): MutationRef<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateFavoriteOrderVariables): MutationRef<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;
  operationName: string;
}
export const createFavoriteOrderRef: CreateFavoriteOrderRef;

export function createFavoriteOrder(vars: CreateFavoriteOrderVariables): MutationPromise<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;
export function createFavoriteOrder(dc: DataConnect, vars: CreateFavoriteOrderVariables): MutationPromise<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;

interface ListCoffeeDrinksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCoffeeDrinksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCoffeeDrinksData, undefined>;
  operationName: string;
}
export const listCoffeeDrinksRef: ListCoffeeDrinksRef;

export function listCoffeeDrinks(): QueryPromise<ListCoffeeDrinksData, undefined>;
export function listCoffeeDrinks(dc: DataConnect): QueryPromise<ListCoffeeDrinksData, undefined>;

interface GetCafeByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCafeByIdVariables): QueryRef<GetCafeByIdData, GetCafeByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCafeByIdVariables): QueryRef<GetCafeByIdData, GetCafeByIdVariables>;
  operationName: string;
}
export const getCafeByIdRef: GetCafeByIdRef;

export function getCafeById(vars: GetCafeByIdVariables): QueryPromise<GetCafeByIdData, GetCafeByIdVariables>;
export function getCafeById(dc: DataConnect, vars: GetCafeByIdVariables): QueryPromise<GetCafeByIdData, GetCafeByIdVariables>;

interface UpdateUserFavoriteCafeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserFavoriteCafeVariables): MutationRef<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserFavoriteCafeVariables): MutationRef<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;
  operationName: string;
}
export const updateUserFavoriteCafeRef: UpdateUserFavoriteCafeRef;

export function updateUserFavoriteCafe(vars: UpdateUserFavoriteCafeVariables): MutationPromise<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;
export function updateUserFavoriteCafe(dc: DataConnect, vars: UpdateUserFavoriteCafeVariables): MutationPromise<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;

