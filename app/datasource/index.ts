import { IBaseOperations } from "./types/IBaseOperations";
import { supabaseClient } from "./handler/supabaseClient";
import { TCollectionName } from "./types/TCollectionNames";
import { IDefaultFields } from "./types/IDefaultFields";

export default async function dataSource<T extends IDefaultFields>(
  collectionName: TCollectionName
): Promise<IBaseOperations<T>> {
  return supabaseClient<T>(collectionName);
}
