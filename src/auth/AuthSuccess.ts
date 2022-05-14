import { AccessToken, EncUserData } from "../../../covrt-types/dist";

export type AuthSuccess = EncUserData & {token: AccessToken};