import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  ControlProps,
  isIntegerControl,
  isNumberControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import NumberInput from "../ui/InputNumber";
interface IProps extends ControlProps {
  label: string;
}

const NumberFieldRenderer: React.FC<IProps> = ({
  data,
  handleChange,
  path,
  label,
  errors,
}) => {
  return (
    <div className="p-3">
      <NumberInput
        type="number"
        id={path}
        label={data && label}
        placeholder={label}
        value={data}
        onChange={(e) => handleChange(path, Number(e.target.value))}
        errormessage={errors}
        variant={errors ? "error" : "default"}
      />
    </div>
  );
};
export const customNumberFieldTester: RankedTester = rankWith(
  4,
  isNumberControl
);
export const customIntegerFieldTester: RankedTester = rankWith(
  4,
  isIntegerControl
);

// Enhance the component with JSONForms control props
export default withJsonFormsControlProps(NumberFieldRenderer);
