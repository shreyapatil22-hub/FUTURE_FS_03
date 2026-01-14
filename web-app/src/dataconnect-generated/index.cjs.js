const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'futurefs03',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createFavoriteOrderRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateFavoriteOrder', inputVars);
}
createFavoriteOrderRef.operationName = 'CreateFavoriteOrder';
exports.createFavoriteOrderRef = createFavoriteOrderRef;

exports.createFavoriteOrder = function createFavoriteOrder(dcOrVars, vars) {
  return executeMutation(createFavoriteOrderRef(dcOrVars, vars));
};

const listCoffeeDrinksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCoffeeDrinks');
}
listCoffeeDrinksRef.operationName = 'ListCoffeeDrinks';
exports.listCoffeeDrinksRef = listCoffeeDrinksRef;

exports.listCoffeeDrinks = function listCoffeeDrinks(dc) {
  return executeQuery(listCoffeeDrinksRef(dc));
};

const getCafeByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCafeById', inputVars);
}
getCafeByIdRef.operationName = 'GetCafeById';
exports.getCafeByIdRef = getCafeByIdRef;

exports.getCafeById = function getCafeById(dcOrVars, vars) {
  return executeQuery(getCafeByIdRef(dcOrVars, vars));
};

const updateUserFavoriteCafeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserFavoriteCafe', inputVars);
}
updateUserFavoriteCafeRef.operationName = 'UpdateUserFavoriteCafe';
exports.updateUserFavoriteCafeRef = updateUserFavoriteCafeRef;

exports.updateUserFavoriteCafe = function updateUserFavoriteCafe(dcOrVars, vars) {
  return executeMutation(updateUserFavoriteCafeRef(dcOrVars, vars));
};
