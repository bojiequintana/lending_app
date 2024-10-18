import { IBaseOperations } from "../types/IBaseOperations";
import { IDefaultFields } from "../types/IDefaultFields";
import { ICreate, IFilter } from "../types/OperationParams";
import { TCollectionName } from "../types/TCollectionNames";

import { createClient, PostgrestResponse } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseClient = async <T extends IDefaultFields>(
  collectionName: TCollectionName
): Promise<IBaseOperations<T>> => {
  const read = async (): Promise<T[]> => {
    try {
      console.log("test");
      const { data, error }: PostgrestResponse<T> = await supabase
        .from(collectionName)
        .select("*");

      if (error) {
        console.error("Error fetching data:", error.message);
        throw new Error("Error fetching data");
      }
      // Ensure the data is returned
      if (data) {
        return data;
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      console.error("Error fetching supabase data:", error);
      throw new Error("Error fetching supabase data");
    }
  };

  const create = async <U>(payload: ICreate<U>): Promise<T> => {
    try {
      console.log("collectionName", payload);
      console.log("collectionName", collectionName);
      return {} as T;
    } catch (error) {
      console.error("Error fetching document:", error);
      throw new Error("Error fetching supabase data");
    }
  };

  const readById = async (id: string): Promise<T> => {
    try {
      console.log("collectionName", id);
      console.log("collectionName", collectionName);
      return {} as T;
    } catch (error) {
      console.error("Error fetching document:", error);
      throw new Error("Error fetching supabase data");
    }
  };

  const readByFields = async (filters: IFilter = []): Promise<T[]> => {
    try {
      console.log("collectionName", collectionName);
      console.log("filters", filters);
      return [{}] as T[];
    } catch (error) {
      console.error("Error fetching supabase data:", error);
      throw new Error("Error fetching supabase data");
    }
  };

  return { read, create, readByFields, readById };
};
