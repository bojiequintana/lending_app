import { useLoaderData } from "@remix-run/react";
import Button from "../ui/Button";
import keycloak from "public/keycloak.png";
import { loader } from "~/root";
import { useSupabaseClient } from "~/hooks/useSupabaseClient";

const KeycloakForm = () => {
  const { env, serverSession } = useLoaderData<typeof loader>();
  const { loginWithThirdParty } = useSupabaseClient({ env, serverSession });
  return (
    <div className="w-full">
      <Button
        type="button"
        variant="base100"
        className="relative px-8 w-full"
        onClick={async () => await loginWithThirdParty("keycloak")}
      >
        <img src={keycloak} alt="googleLogo" className="w-6 absolute" />
      </Button>
    </div>
  );
};

export default KeycloakForm;
