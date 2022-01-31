import { createStore, combineReducers, applyMiddleware } from "redux";
import AppReducer from "./reducers/appReducer";
import signupReducer from './reducers/signup'
import thunk from 'redux-thunk'
const AllReducer = {
  app: AppReducer,
  signup: signupReducer
};

const rootReducer = combineReducers(AllReducer);

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
