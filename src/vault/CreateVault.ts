import { VaultID } from 'covrt-types';
import { BaseRes } from '../Base';
import { ReqErrRes } from '../error/ReqErr';
import { CreateContainerReq } from './public/CreateContainer';
import { CreateGroupReq } from './public/CreateGroup';

export type CreateVaultReqBase = {
	vault: string;
	group: Omit<CreateGroupReq, 'name'>;
}

type Private = {
	isPrivate: true;
	container: Omit<CreateContainerReq, 'name'>;
}

type Public = {
	isPrivate: false;
}

export type CreateVaultReq = CreateVaultReqBase & (Private | Public);

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