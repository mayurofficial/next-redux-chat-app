import Actions from "../actions/appActions";
import { getFirestore as firestore } from "firebase/firestore"
import {auth} from 'firebase/auth'
let initialState = {
  user: {},
  authToken: null,
  isLogged: false,
  fun : async (dispatch)=>{
    const db = firestore();
    auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(data=>console.log(data))
    .catch(err=>{console.log(err)})
}
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        user: action.data
      };
    case Actions.LOGOUT:
      return {
        ...state,
        isLogged: false,
        authToken: null
      };
    case Actions.SET_TOKEN:
      return {
        ...state,
        authToken: action.data,
        isLogged: true
      };
      case Actions.SIGNUP:
        return {
          ...state
        }
    default:
      return state;
  }
};

export default AppReducer;
