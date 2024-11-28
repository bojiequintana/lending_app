import { JwtPayload } from "jsonwebtoken";

export interface UserEntity {
  given_name: string;
  family_name: string;
  name: string;
  email: string;
  roles: string[];
  email_verified: boolean;
}

export const createUserDTO = (userPayload: JwtPayload): UserEntity => {
  return {
    given_name: userPayload.given_name,
    family_name: userPayload.family_name,
    name: userPayload.name,
    email: userPayload.email,
    email_verified: userPayload.email_verified,
    ...userPayload?.realm_access, //roles
  };
};
