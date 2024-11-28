import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  ControlProps,
  isStringControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import Input from "../ui/input";
interface IProps extends ControlProps {
  label: string;
}

const TextFieldRenderer: React.FC<IProps> = ({
  data,
  handleChange,
  path,
  label,
  errors,
  // uischema,
  schema,
}) => {
  // const placeholder = uischema?.options?.placeholder || "";
  const placeholder = schema.title ?? label;
  return (
    <div className="p-3">
      <Input
        id={path}
        label={data && label}
        value={data}
        onChange={(e) => handleChange(path, e.target.value)}
        errormessage={errors}
        placeholder={placeholder}
        variant={errors ? "error" : "default"}
      />
    </div>
  );
};
export const customTextFieldTester: RankedTester = rankWith(4, isStringControl);
// Enhance the component with JSONForms control props
export default withJsonFormsControlProps(TextFieldRenderer);
