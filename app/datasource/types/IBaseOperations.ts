import { ICreate, IFilter } from "./OperationParams";

export interface IBaseOperations<T> {
  read: () => Promise<T[]>;
  create: <U>(params: ICreate<U>) => Promise<T>;
  readById: (id: string) => Promise<T>;
  readByFields: (filters: IFilter) => Promise<T[]>;
  //   update: (id: string, payload: Partial<T>) => T;
  //   delete: (id: string) => string;
}
