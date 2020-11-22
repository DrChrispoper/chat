import { Contact, Message } from '../../utils/types';

export interface UserState {
  readonly contacts: Array<Contact>;
  readonly selectedContact: string;
  readonly messages: Array<Message>;
  readonly authed: boolean;
}

// Describing the different ACTION NAMES available
export enum UserActionTypes {
  SET_SED_CONTACT = '@@user/SET_SED_CONTACT',
  ADD_MESSAGE = '@@user/ADD_MESSAGE',
  LOGIN = '@@user/LOGIN',
  LOGIN_SUCCESS = '@@user/LOGIN_SUCCESS',
  LOGOUT = '@@user/LOGOUT',
}
