import { User } from 'src/app/model/user.model';
import * as  AuthActions  from './auth.action';


export interface State {
  user: User;
}

const initialState: State = {
  user: null
};

export function authReducer(state = initialState, action : AuthActions.AuthActions) {
  switch(action.type){
    case AuthActions.LOGIN:
      const user = new User(action.payload.userId, action.payload.email, action.payload.token, action.payload.expirationDate);
      return {
        ...state,
        user : user
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user : null
      };
  }
  return state;
}
