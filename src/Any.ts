import { LoginReq } from "./auth/Login";
import { RegisterReq } from "./auth/Register";
import { CreateGroupReq } from "./vault/CreateGroup";
import { CreateVaultReq } from "./vault/CreateVault";

export type AnyReq = LoginReq | RegisterReq | CreateGroupReq | CreateVaultReq;