import { EncContainer, FullGroupData, Vault } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum GetVaultDataCode {
	Success = 1,
    InvalidVault,
    
}

type Success = {
	res: GetVaultDataCode.Success;
	vault: Vault;
    groups: FullGroupData[];
    containers: EncContainer[];
}

type InvalidVault = {
    res: GetVaultDataCode.InvalidVault;
}

export type GetVaultDataData = (Success | InvalidVault);

export type GetVaultDataRes = (BaseRes<'GetVaults'> & GetVaultDataData) | ReqErrRes;