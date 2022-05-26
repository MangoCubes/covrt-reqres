import { VaultID } from 'covrt-types';
import { BaseRes } from '../Base';
import { ReqErrRes } from '../error/ReqErr';
import { CreateContainerReq } from './public/CreateContainer';
import { CreateGroupReq } from './public/CreateGroup';

export type CreateVaultReq = {
	vault: string,
	isPrivate: boolean,
	container: Omit<CreateContainerReq, 'name'>;
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

type DefaultRes = {
	res: CreateVaultCode.NotAllowed;
}

type Duplicate = {
	res: CreateVaultCode.Duplicate;
	duplicateOf: VaultID;
}

export type CreateVaultData = Success | DefaultRes | Duplicate;

export type CreateVaultRes = (BaseRes<'CreateVault'> & CreateVaultData) | ReqErrRes;