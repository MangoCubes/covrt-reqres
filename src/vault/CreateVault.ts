import { VaultID } from 'covrt-types';
import { BaseRes } from '../Base';
import { ReqErrRes } from '../error/ReqErr';
import { CreateGroupReq } from './public/CreateGroup';

export type CreateVaultReq = {
	vault: string;
	isPrivate: boolean;
	group: Omit<CreateGroupReq, 'name'>;
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

type Failure = {
	res: Exclude<CreateVaultCode, CreateVaultCode.Success>;
}

export type CreateVaultData = Success | Failure;

export type CreateVaultRes = (BaseRes<'CreateVault'> & CreateVaultData) | ReqErrRes;