export enum month {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
}

export interface IRoutine  {
  id: number;
  time: string;
  title: string;
  description: string;
  isDone: boolean;
  grade: number;
}

export interface ITarget  {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  grade: number;
}

export interface IDay  {
  id: number;
  day: number;
  routine: IRoutine[];
  targets: ITarget[];
}

export interface IMonth  {
  id: number;
  month: month;
  days: IDay[];

}

export interface IYear  {
  id: number;
  year: number;
  months: IMonth[];
}

export type UserState = {
  username: string;
  email: string;
  isAuth: boolean;
  dashboard: IYear[];
}

export type userActions = {
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setIsAuth: (isAuth: boolean) => void;
  deleteUser: () => void;
  setDashboard: (dashboard: IYear[]) => void;
}

export interface IUser extends UserState, userActions {}
