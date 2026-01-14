import { CreateFavoriteOrderData, CreateFavoriteOrderVariables, ListCoffeeDrinksData, GetCafeByIdData, GetCafeByIdVariables, UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateFavoriteOrder(options?: useDataConnectMutationOptions<CreateFavoriteOrderData, FirebaseError, CreateFavoriteOrderVariables>): UseDataConnectMutationResult<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;
export function useCreateFavoriteOrder(dc: DataConnect, options?: useDataConnectMutationOptions<CreateFavoriteOrderData, FirebaseError, CreateFavoriteOrderVariables>): UseDataConnectMutationResult<CreateFavoriteOrderData, CreateFavoriteOrderVariables>;

export function useListCoffeeDrinks(options?: useDataConnectQueryOptions<ListCoffeeDrinksData>): UseDataConnectQueryResult<ListCoffeeDrinksData, undefined>;
export function useListCoffeeDrinks(dc: DataConnect, options?: useDataConnectQueryOptions<ListCoffeeDrinksData>): UseDataConnectQueryResult<ListCoffeeDrinksData, undefined>;

export function useGetCafeById(vars: GetCafeByIdVariables, options?: useDataConnectQueryOptions<GetCafeByIdData>): UseDataConnectQueryResult<GetCafeByIdData, GetCafeByIdVariables>;
export function useGetCafeById(dc: DataConnect, vars: GetCafeByIdVariables, options?: useDataConnectQueryOptions<GetCafeByIdData>): UseDataConnectQueryResult<GetCafeByIdData, GetCafeByIdVariables>;

export function useUpdateUserFavoriteCafe(options?: useDataConnectMutationOptions<UpdateUserFavoriteCafeData, FirebaseError, UpdateUserFavoriteCafeVariables>): UseDataConnectMutationResult<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;
export function useUpdateUserFavoriteCafe(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserFavoriteCafeData, FirebaseError, UpdateUserFavoriteCafeVariables>): UseDataConnectMutationResult<UpdateUserFavoriteCafeData, UpdateUserFavoriteCafeVariables>;
