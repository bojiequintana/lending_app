import { IBaseOperations } from "../types/IBaseOperations";
import { IDefaultFields } from "../types/IDefaultFields";
import { ICreate, IFilter } from "../types/OperationParams";
import { TCollectionName } from "../types/TCollectionNames";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseClient = async <T extends IDefaultFields>(
  collectionName: TCollectionName
): Promise<IBaseOperations<T>> => {
  const read = async (): Promise<T[]> => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/${collectionName}`
      );
      return result.json();
    } catch (error) {
      console.error("Error fetching Firestore data:", error);
      throw new Error("Error fetching Firestore data");
    }
  };

  const create = async <U>(payload: ICreate<U>): Promise<T> => {
    try {
      console.log("collectionName", payload);
      console.log("collectionName", collectionName);
      return {} as T;
    } catch (error) {
      console.error("Error fetching document:", error);
      throw new Error("Error fetching Firestore data");
    }
  };

  const readById = async (id: string): Promise<T> => {
    try {
      console.log("collectionName", id);
      console.log("collectionName", collectionName);
      return {} as T;
    } catch (error) {
      console.error("Error fetching document:", error);
      throw new Error("Error fetching Firestore data");
    }
  };

  const readByFields = async (filters: IFilter = []): Promise<T[]> => {
    try {
      console.log("collectionName", collectionName);
      console.log("filters", filters);
      return [{}] as T[];
    } catch (error) {
      console.error("Error fetching Firestore data:", error);
      throw new Error("Error fetching Firestore data");
    }
  };

  return { read, create, readByFields, readById };
};
