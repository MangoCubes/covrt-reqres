import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { NotAllowedErrRes } from "../error/NotAllowedErr";
import { ReqErrRes } from "../error/ReqErr";

export enum DeleteVaultCode {
	Success = 1
}

type Success = {
	res: DeleteVaultCode.Success;
}

type Failure = {
    res: Exclude<DeleteVaultCode, DeleteVaultCode.Success>;
}

export type DeleteVaultData = (Success | Failure);

export type DeleteVaultRes = (BaseRes<'DeleteVault'> & DeleteVaultData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Vault>;