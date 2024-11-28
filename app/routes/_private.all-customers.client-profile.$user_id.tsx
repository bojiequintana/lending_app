import { useLoaderData } from "@remix-run/react";
import UiSchemaRenderer from "~/components/ui-jsonform/UISchemaRenderer";
import * as personalInfoStatic from "~/json-forms/personal-info";
import * as residentialAddressStatic from "~/json-forms/residential-address";
import { SchemaType } from "~/types/SchemaType";
import { loadAuthorizedToken } from "~/utils/auth/loadAuthorizedToken.server";
import { loadForm } from "~/json-forms/loadForm";
import { transformSchema } from "~/utils/transformSchema";
import { CSSPropertiesType } from "~/types/CSSPropertiesType";

export const loader = async () => {
  const userToken = await loadAuthorizedToken();
  const jsonForms: SchemaType[] = [];
  const residentialAddress = await loadForm(userToken.access_token, "CODE_030");
  const personalInfo = await loadForm(userToken.access_token, "CODE_101");
  const validId = await loadForm(userToken.access_token, "CODE_103");
  const proofOfIncome = await loadForm(userToken.access_token, "CODE_031");
  if (personalInfo.fields) {
    const personalInfoSchema = transformSchema(
      personalInfo.fields,
      personalInfoStatic.uiSchema,
      personalInfo.uiSchema
    );
    jsonForms.push(personalInfoSchema);
  }
  if (residentialAddress.fields) {
    const residentialAddressSchema = transformSchema(
      residentialAddress.fields,
      residentialAddressStatic.uiSchema,
      residentialAddress.uiSchema
    );
    jsonForms.push(residentialAddressSchema);
  }
  if (validId.fields) {
    const validIdSchema = transformSchema(validId.fields, validId.uiSchema);
    jsonForms.push(validIdSchema);
  }
  if (proofOfIncome.fields) {
    const proofOfIncomeSchema = transformSchema(
      proofOfIncome.fields,
      proofOfIncome.uiSchema
    );
    jsonForms.push(proofOfIncomeSchema);
  }
  return {
    jsonForms,
  };
};

const style: CSSPropertiesType = {
  "--value": 70,
};

const ClientProfile = () => {
  const { jsonForms } = useLoaderData<typeof loader>();
  return (
    <div className="min-h-dvh h-full flex gap-10">
      <div className="flex-1 flex flex-col gap-10">
        {jsonForms.map((jsonForm, index) => {
          return (
            <div className="w-full" key={`key-${index.toString()}`}>
              <div className="hidden md:flex w-full">
                <UiSchemaRenderer
                  schema={jsonForm.schema}
                  uiSchema={jsonForm.uiSchema}
                />
              </div>
              <div className="flex md:hidden w-full">
                <UiSchemaRenderer
                  schema={jsonForm.schema}
                  uiSchema={jsonForm.uiSchemaMobile}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden xl:grid grid-rows-2 w-full max-w-lg h-[calc(100dvh-195px)] sticky top-44">
        <div className="flex flex-col gap-5 prose bg-base-100 rounded-badge shadow-lg p-10 h-80 w-full">
          <span className="text-lg font-bold">Personal Information</span>
          <span>Residential Address</span>
          <span>Valid Id</span>
          <span>Employment Details</span>
          <span>Other/s</span>
        </div>
        <div className="flex flex-col gap-5 prose bg-base-100 rounded-badge shadow-lg p-10 h-full w-full  divide-y">
          <span className="text-lg font-bold">Credit score</span>
          <div className="flex flex-1 justify-center items-center w-full pt-5">
            <div
              className="radial-progress bg-primary text-primary-content border-primary border-4"
              style={style}
            >
              700
            </div>
          </div>
          <div className="grid grid-cols-4 bg-base-100 pt-5">
            <span className="flex text-xs w-full">Registration</span>
            <span className="flex text-xs w-full">Internal validation</span>
            <span className="flex text-xs w-full">Initial review</span>
            <span className="flex text-xs w-full">
              Phone credit verification
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
