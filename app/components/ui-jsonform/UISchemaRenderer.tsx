import { JsonSchema, UISchemaElement } from "@jsonforms/core";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import CustomGridLayout, {
  customGridLayoutTester,
} from "./UISchemaGroupRenderer";
import TextField, { customTextFieldTester } from "./TextField";
import NumberField, {
  customIntegerFieldTester,
  customNumberFieldTester,
} from "./NumberField";
import SelectField, { customSelectTester } from "./SelectField";
interface IProps {
  schema: JsonSchema;
  uiSchema?: UISchemaElement;
  data?: Record<string, unknown>;
}
export default function UiSchemaRenderer(props: Readonly<IProps>) {
  const [isClient, setIsClient] = useState(false);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    setIsClient(true);
    if (props.data) {
      setInitialData(props.data);
    }
  }, [props]);

  if (!isClient) {
    return null; // Render nothing until the component is mounted on the client
  }

  const renderers = [
    ...materialRenderers,
    { tester: customGridLayoutTester, renderer: CustomGridLayout },
    { tester: customTextFieldTester, renderer: TextField },
    { tester: customNumberFieldTester, renderer: NumberField },
    { tester: customIntegerFieldTester, renderer: NumberField },
    { tester: customSelectTester, renderer: SelectField },
  ];
  return (
    <Form className="w-full">
      <JsonForms
        schema={props.schema ?? { type: "object" }}
        uischema={props.uiSchema ?? { type: "Group" }}
        data={initialData}
        renderers={renderers}
        cells={materialCells}
        onChange={({ data }) => {
          console.log(data);
        }}
        validationMode="ValidateAndShow"
      />
    </Form>
  );
}
