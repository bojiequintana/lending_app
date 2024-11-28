import { UISchemaElement } from "@jsonforms/core";

export interface JSONObject {
  [key: string]: unknown;
}
export interface SchemaType {
  schema: JSONObject;
  uiSchema: UISchemaElement;
  uiSchemaMobile: UISchemaElement;
}
