export const loadForm = async (accessToken: string, formId: string) => {
  const response = await fetch(
    `${process.env.FORM_ENGINE_DOMAIN_URL}/form/code/${formId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the form data");
  }

  const data = await response.json();
  return data;
};
