import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'futurefs03',
  location: 'us-east4'
};

export const createFavoriteOrderRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateFavoriteOrder', inputVars);
}
createFavoriteOrderRef.operationName = 'CreateFavoriteOrder';

export function createFavoriteOrder(dcOrVars, vars) {
  return executeMutation(createFavoriteOrderRef(dcOrVars, vars));
}

export const listCoffeeDrinksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCoffeeDrinks');
}
listCoffeeDrinksRef.operationName = 'ListCoffeeDrinks';

export function listCoffeeDrinks(dc) {
  return executeQuery(listCoffeeDrinksRef(dc));
}

export const getCafeByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCafeById', inputVars);
}
getCafeByIdRef.operationName = 'GetCafeById';

export function getCafeById(dcOrVars, vars) {
  return executeQuery(getCafeByIdRef(dcOrVars, vars));
}

export const updateUserFavoriteCafeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserFavoriteCafe', inputVars);
}
updateUserFavoriteCafeRef.operationName = 'UpdateUserFavoriteCafe';

export function updateUserFavoriteCafe(dcOrVars, vars) {
  return executeMutation(updateUserFavoriteCafeRef(dcOrVars, vars));
}

