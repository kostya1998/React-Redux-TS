export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

type UsersArray = Array<any>;

export interface UserState {
  users: UsersArray;
  loading: boolean;
  error: null | string;
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUserActionSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: UsersArray;
}

interface FetchUserActionError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserActionSuccess
  | FetchUserActionError;
