import { EncContainer, FullGroupData, PrivateVault, PublicVault } from "../../../covrt-types/dist";
import { BaseRes } from "../Base";
import { ServerErrRes } from "../error/ServerErr";

export enum GetVaultDataCode{
	Success,
    InvalidVault,
    
}

type Success = {
	res: GetVaultDataCode.Success;
	vault: PrivateVault | PublicVault;
    groups: FullGroupData[];
    containers: EncContainer[];
}

type InvalidVault = {
    res: GetVaultDataCode.InvalidVault;
}

export type GetVaultDataData = (Success | InvalidVault);

export type GetVaultDataRes = (BaseRes<'GetVaults'> & GetVaultDataData) | ServerErrRes;