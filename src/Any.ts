import { LoginReq, LoginRes } from "./auth/Login";
import { RegisterReq, RegisterRes } from "./auth/Register";
import { TokenAuthRes } from "./auth/TokenAuth";
import { CreateGroupReq } from "./vault/public/CreateGroup";
import { CreateVaultReq } from "./vault/CreateVault";
import { CreateItemsReq } from "./vault/CreateItems";
import { CreateFieldsReq } from "./vault/CreateFields";

export type AnyReq = LoginReq | RegisterReq | CreateGroupReq | CreateVaultReq | CreateItemsReq | CreateFieldsReq;

export type AnyRes = LoginRes | RegisterRes | TokenAuthRes;