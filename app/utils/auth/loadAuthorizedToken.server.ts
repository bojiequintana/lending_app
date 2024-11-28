export const loadAuthorizedToken = async () => {
  const response = await fetch(
    `${process.env.KEYCLOAK_DOMAIN_URL}/realms/lending-app/protocol/openid-connect/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "password",
        client_id: "lending-app-formengine",
        username: "lendingformadmin",
        password: "password",
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch token");
  }

  const data = await response.json();
  return data;
};
