import { GroupID, SymEnc, SymEncType } from '@covrt-types';
import { BaseRes } from '../Base';

export type CreateGroupReq = {
    name: string;
    key: SymEnc<SymEncType.GroupSymKey>;
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

export type CreateGroupRes = BaseRes<'CreateGroup'> & (Success | DefaultRes | InvalidPermission);