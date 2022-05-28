import { VaultID } from 'covrt-types';
import { AsymEnc, AsymEncType } from 'covrt-types/dist/encryption/AsymEnc';
import { BaseRes } from '../Base';
import { ReqErrRes } from '../error/ReqErr';
import { CreateGroupReq } from './public/CreateGroup';

export type CreateVaultReq = {
	vault: string;
	isPrivate: boolean;
	group: Omit<CreateGroupReq, 'name'>;
	groupKey: AsymEnc<AsymEncType.GroupSymKey>;
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