export interface IRead {}

export interface ICreate<T> {
  payload: T;
}

export interface IUpdate<T> {
  id: string;
  payload: T;
}

export interface IDelete {
  id: string;
}

export interface IFilter {}
