import { UserState, UserActionTypes } from './types';
import { UserActionInterfaces } from './actions';
import { Reducer } from 'redux';
import * as contactsJSON from '../../data/contacts.json';

const INIT_STATE: UserState = {
  contacts: contactsJSON.contacts,
  selectedContact: '',
  messages: [],
  authed: false,
};

const reducer: Reducer<UserState, UserActionInterfaces> = (
  state = INIT_STATE,
  action: UserActionInterfaces
) => {
  switch (action.type) {
    case UserActionTypes.SET_SED_CONTACT:
      return {
        ...state,
        selectedContact: action.payload,
      };
    case UserActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authed: true,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        authed: false,
      };
    default:
      return { ...state };
  }
};

export { reducer as userReducer };
