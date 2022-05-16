import { AccessToken, EncUserData } from "covrt-types";

export type AuthSuccess = EncUserData & {token: AccessToken};