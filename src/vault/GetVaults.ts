import { Vault } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum GetVaultsCode {
	Success = 1
}

type Success = {
	res: GetVaultsCode.Success;
	vaults: Vault[];
}

export type GetVaultsData = (Success);

export type GetVaultsRes = (BaseRes<'GetVaults'> & GetVaultsData) | ReqErrRes;