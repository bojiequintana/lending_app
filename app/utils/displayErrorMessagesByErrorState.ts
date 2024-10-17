interface IFieldErrorMessages {
  [key: string]: string;
}
interface IFieldsErrorParams {
  fieldErrors: IFieldErrorMessages | undefined;
  fieldErrorsState: { [key: string]: boolean } | undefined;
}

export const displayErrorMessagesByErrorState = ({
  fieldErrors,
  fieldErrorsState,
}: IFieldsErrorParams): IFieldErrorMessages => {
  if (!fieldErrorsState) {
    return {};
  }
  const fields: IFieldErrorMessages = {};
  if (fieldErrors) {
    Object.keys(fieldErrors).forEach((fieldName) => {
      if (fieldErrorsState[fieldName]) {
        fields[fieldName] = fieldErrors[fieldName];
      } else {
        fields[fieldName] = "";
      }
    });
  }
  return fields;
};
