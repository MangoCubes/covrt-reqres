import { Vault } from "covrt-types";
import { BaseRes } from "../Base";
import { ServerErrRes } from "../error/ServerErr";

export enum GetVaultsCode{
	Success
}

type Success = {
	res: GetVaultsCode.Success;
	vaults: Vault[];
}

export type GetVaultsData = (Success);

export type GetVaultsRes = (BaseRes<'GetVaults'> & GetVaultsData) | ServerErrRes;