import { EncKeyPair, GroupID, KeyPairType } from 'covrt-types';
import { AsymEnc, AsymEncType } from 'covrt-types/dist/encryption/AsymEnc';
import { BaseRes } from '../../Base';
import { ReqErrRes } from '../../error/ReqErr';

export type CreateGroupReq = {
    name: string;
    key: AsymEnc<AsymEncType.GroupSymKey>;
	keyPair: EncKeyPair<KeyPairType.Group>;
}

export enum CreateGroupCode{
	Success,
	NotAllowed,
	InvalidPermission,
	Private
}

type Success = {
	res: CreateGroupCode.Success;
	gid: GroupID;
}

type DefaultRes = {
	res: CreateGroupCode.NotAllowed | CreateGroupCode.Private;
}

type InvalidPermission = {
	res: CreateGroupCode.InvalidPermission;
	permission: string;
}

export type CreateGroupData = Success | DefaultRes | InvalidPermission;

export type CreateGroupRes = (BaseRes<'CreateGroup'> & CreateGroupData) | ReqErrRes;