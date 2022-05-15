import { PrivateVault, PublicVault } from "../../../covrt-types/dist";
import { BaseRes } from "../Base";
import { ServerErrRes } from "../error/ServerErr";

export enum GetVaultsCode{
	Success
}

type Success = {
	res: GetVaultsCode.Success;
	vaults: (PrivateVault | PublicVault)[];
}

export type GetVaultsData = (Success);

export type GetVaultsRes = (BaseRes<'GetVaults'> & GetVaultsData) | ServerErrRes;