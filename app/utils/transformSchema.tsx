import { UISchemaElement } from "@jsonforms/core";
import { JSONObject, SchemaType } from "~/types/SchemaType";

export const transformSchema = (
  schema: JSONObject,
  uiSchema?: UISchemaElement,
  uiSchemaMobile?: UISchemaElement
): SchemaType => {
  const reformedSchema = schema;
  delete reformedSchema["$schema"]; // TODO: teporariy fix for schema unresolved url
  const _uiSchema = { ...uiSchema, type: "CustomGridLayout" };
  const _uiSchemaMobile = !uiSchemaMobile
    ? uiSchema
    : { ...uiSchemaMobile, type: "CustomGridLayout" };
  const schemaData = {
    schema: reformedSchema,
    uiSchema: _uiSchema,
    uiSchemaMobile: _uiSchemaMobile ?? { type: "Group" },
  };
  return schemaData;
};
