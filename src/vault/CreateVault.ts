import { SymEnc, SymEncType, VaultID } from '@covrt-types';
import { BaseRes } from '../Base';
import { ServerErr } from '../error/ServerErr';

export type CreateVaultReq = {
	vault: string,
	isPrivate: boolean,
	contKey: SymEnc<SymEncType.ContSymKey>;
}

export enum CreateVaultCode{
	Success,
	NotAllowed,
	Duplicate
}

type Success = {
	res: CreateVaultCode.Success;
	vid: VaultID;
}

type DefaultRes = {
	res: CreateVaultCode.NotAllowed;
}

type Duplicate = {
	res: CreateVaultCode.Duplicate;
	vid: VaultID;
}

export type CreateVaultRes = (BaseRes<'CreateVault'> & (Success | DefaultRes | Duplicate)) | ServerErr;