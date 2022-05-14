import { LoginReq, LoginRes } from "./auth/Login";
import { RegisterReq, RegisterRes } from "./auth/Register";
import { TokenAuthRes } from "./auth/TokenAuth";
import { CreateGroupReq } from "./vault/CreateGroup";
import { CreateVaultReq } from "./vault/CreateVault";

export type AnyReq = LoginReq | RegisterReq | CreateGroupReq | CreateVaultReq;

export type AnyRes = LoginRes | RegisterRes | TokenAuthRes;