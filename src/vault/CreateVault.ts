import { VaultID } from 'covrt-types';
import { BaseRes } from '../Base';
import { ReqErrRes } from '../error/ReqErr';
import { CreateContainerReq } from './public/CreateContainer';
import { CreateGroupReq } from './public/CreateGroup';

export type CreateVaultReq = {
	vault: string;
	group: Omit<CreateGroupReq, 'name'>;
	isPrivate: boolean;
	container: Omit<CreateContainerReq, 'name'>;
}

export enum CreateVaultCode {
	Success = 1,
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