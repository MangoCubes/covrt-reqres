import { EncContainer, FullGroupData, Vault } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { ReqErrRes } from "../error/ReqErr";

export enum GetVaultDataCode {
	Success = 1
}

type Success = {
	res: GetVaultDataCode.Success;
	vault: Vault;
    groups: FullGroupData[];
    containers: EncContainer[];
}

type InvalidVault = {
    res: Exclude<GetVaultDataCode, GetVaultDataCode.Success>;
}

export type GetVaultDataData = (Success | InvalidVault);

export type GetVaultDataRes = (BaseRes<'GetVaults'> & GetVaultDataData) | ReqErrRes | InvalidErrRes<InvalidType.Vault>;