import { EncContainer, FullGroupData, Vault } from "covrt-types";
import { BaseRes } from "../Base";
import { ServerErrRes } from "../error/ServerErr";

export enum GetVaultDataCode{
	Success,
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

export type GetVaultDataRes = (BaseRes<'GetVaults'> & GetVaultDataData) | ServerErrRes;