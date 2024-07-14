export type UserState = {
  username: string;
  email: string;
  isAuth: boolean;
}

export type userActions = {
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setIsAuth: (isAuth: boolean) => void;
  deleteUser: () => void;
}

export interface IUser extends UserState, userActions {}
