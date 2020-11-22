export interface Contact {
  id: number;
  fullname: string;
}

export interface Message {
  id: string;
  message: string;
  contact: string;
  time: string;
}

export interface Creds {
  email: string;
  password: string;
}
