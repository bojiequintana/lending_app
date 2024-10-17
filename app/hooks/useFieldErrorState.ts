import { useEffect, useState } from "react";

export default function useFieldErrorState(fieldNames: string[]) {
  const [fieldErrorsState, setFieldErrorsState] = useState<{
    [key: string]: boolean;
  }>();

  useEffect(() => {
    if (fieldNames) {
      const fieldState: { [key: string]: boolean } = {};
      for (const fieldName of fieldNames) {
        fieldState[fieldName] = true;
      }
      setFieldErrorsState(fieldState);
    }
  }, []);

  const turnOffErrorIndicator = (fieldName: string) => {
    if (fieldErrorsState && fieldErrorsState[fieldName] === true) {
      setFieldErrorsState((value) => {
        return { ...value, [fieldName]: false };
      });
    }
  };

  return {
    fieldErrorsState,
    turnOffErrorIndicator,
  };
}
