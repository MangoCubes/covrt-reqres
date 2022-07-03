import { LoginReq, LoginRes } from "./auth/Login";
import { RegisterReq, RegisterRes } from "./auth/Register";
import { TokenAuthRes } from "./auth/TokenAuth";
import { CreateGroupReq } from "./vault/public/CreateGroup";
import { CreateVaultReq } from "./vault/CreateVault";
import { CreateItemsReq } from "./vault/CreateItems";
import { CreateFieldsReq } from "./vault/CreateFields";
import { CreateContainerReq } from "./vault/public/CreateContainer";

export type AnyReq = LoginReq | RegisterReq | CreateGroupReq | CreateVaultReq | CreateItemsReq | CreateFieldsReq | CreateContainerReq;

export type AnyRes = LoginRes | RegisterRes | TokenAuthRes;