import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum DeleteVaultCode{
	Success,
    InvalidVault,
    NotAllowed,
}

type Success = {
	res: DeleteVaultCode.Success;
}

type Failure = {
    res: Omit<DeleteVaultCode, DeleteVaultCode.Success>;
}

export type DeleteVaultData = (Success | Failure);

export type DeleteVaultRes = (BaseRes<'DeleteVault'> & DeleteVaultData) | ReqErrRes;