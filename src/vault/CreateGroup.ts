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

export type CreateGroupData = {
	[CreateGroupCode.Success]: {
		gid: GroupID;
	};
	[CreateGroupCode.NotAllowed]: null;
	[CreateGroupCode.InvalidPermission]: {
		permission: string;
	};
	[CreateGroupCode.Private]: null;
}

export type CreateGroupRes = BaseRes<'CreateGroup', CreateGroupCode, CreateGroupData>;