import { SymEnc, SymEncType, VaultID } from 'covrt-types';
import { BaseRes } from '../Base';
import { ReqErrRes } from '../error/ReqErr';

export type CreateVaultReq = {
	vault: string,
	isPrivate: boolean,
	contKey: SymEnc<SymEncType.ContainerSymKey>;
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
	duplicateOf: VaultID;
}

export type CreateVaultData = Success | DefaultRes | Duplicate;

export type CreateVaultRes = (BaseRes<'CreateVault'> & CreateVaultData) | ReqErrRes;