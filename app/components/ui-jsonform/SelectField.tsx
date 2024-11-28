import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  ControlProps,
  isEnumControl, // For enumerated values like a dropdown
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import Select from "../ui/Select";

interface IProps extends ControlProps {
  label: string;
}

// Custom Select Control Renderer
const SelectRenderer: React.FC<IProps> = ({
  data,
  handleChange,
  path,
  label,
  errors,
  schema,
}) => {
  // Extract options for the select input from the schema
  const options = schema?.enum || []; // Assuming the options are in the enum field of the schema

  // Extract placeholder from schema or use a default
  const placeholder = schema?.title ?? "Select an option";

  return (
    <div className="p-3">
      <Select
        id={path}
        label={data && label}
        value={data}
        onChange={(e) => handleChange(path, e.target.value)}
        defaultValue={""}
        placeholder={placeholder}
        options={[
          { label: "", value: "" },
          ...options.map((option) => ({ label: option, value: option })),
        ]}
        errormessage={errors}
        variant={errors ? "error" : "default"}
      />
    </div>
  );
};

// Tester for the custom select control, applying it for "enum" properties
export const customSelectTester: RankedTester = rankWith(5, isEnumControl);

// Enhance the component with JSONForms control props
export default withJsonFormsControlProps(SelectRenderer);
