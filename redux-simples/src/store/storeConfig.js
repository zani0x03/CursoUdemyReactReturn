import { createStore, combineReducers } from "redux";

import './reducers/numerosReducer'
import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
  numeros: numerosReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
