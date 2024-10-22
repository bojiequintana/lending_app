import { useActionData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { displayErrorMessagesByErrorState } from "~/utils/displayErrorMessagesByErrorState";

interface IActionResponse {
  fieldErrors?: { [key: string]: string };
  error?: string;
  status?: number;
  data?: unknown[];
}
export default function useActionState<T extends { [key: string]: string }>() {
  const actionData = useActionData<Promise<IActionResponse>>();
  const [fieldErrorsState, setFieldErrorsState] = useState<{
    [key: string]: boolean;
  }>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    if (actionData?.fieldErrors) {
      const fieldState: { [key: string]: boolean } = {};
      for (const fieldName of Object.keys(actionData?.fieldErrors)) {
        fieldState[fieldName] = true;
      }
      setFieldErrorsState(fieldState);
    }
  }, [actionData]);

  const turnOffErrorIndicator = (fieldName: string) => {
    if (fieldErrorsState && fieldErrorsState[fieldName] === true) {
      setFieldErrorsState((value) => {
        return { ...value, [fieldName]: false };
      });
    }
  };

  const fieldErrorMessages = displayErrorMessagesByErrorState({
    fieldErrors: actionData?.fieldErrors,
    fieldErrorsState,
  });

  return {
    actionData,
    isLoading,
    setIsLoading,
    fieldErrorsState,
    fieldErrorMessages: { ...fieldErrorMessages } as T,
    turnOffErrorIndicator,
  };
}
