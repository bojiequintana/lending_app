import UiSchemaRenderer from "~/components/ui-jsonform/UISchemaRenderer";
import * as personalInfo from "~/json-forms/personal-info";
import { transformSchema } from "~/utils/transformSchema";

const Test = () => {
  const { schema, uiSchema } = transformSchema(
    personalInfo.schema,
    personalInfo.uiSchema
  );
  return (
    <div>
      <UiSchemaRenderer schema={schema} uiSchema={uiSchema} />
    </div>
  );
};

export default Test;
