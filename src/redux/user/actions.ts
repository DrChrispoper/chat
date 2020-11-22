import { UserActionTypes } from './types';
import { Message, Creds } from '../../utils/types';

export interface setSelContactInterface {
  type: UserActionTypes.SET_SED_CONTACT;
  payload: string;
}
export const setSelContact = (contact: string) => ({
  type: UserActionTypes.SET_SED_CONTACT,
  payload: contact,
});

export interface addMessageInterface {
  type: UserActionTypes.ADD_MESSAGE;
  payload: Message;
}
export const addMessage = (message: Message) => ({
  type: UserActionTypes.ADD_MESSAGE,
  payload: message,
});

export interface loginInterface {
  type: UserActionTypes.LOGIN;
  payload: Creds;
}
export const login = (email: string, password: string) => ({
  type: UserActionTypes.LOGIN,
  payload: { email, password },
});

export interface logoutInterface {
  type: UserActionTypes.LOGOUT;
}
export const logout = () => ({
  type: UserActionTypes.LOGOUT,
});

export interface loginSuccesInterface {
  type: UserActionTypes.LOGIN_SUCCESS;
}
export const loginSucces = () => ({
  type: UserActionTypes.LOGIN_SUCCESS,
});

export type UserActionInterfaces =
  | setSelContactInterface
  | addMessageInterface
  | loginInterface
  | logoutInterface
  | loginSuccesInterface;
