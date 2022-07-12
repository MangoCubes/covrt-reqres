import { GroupData, GroupID, UserID } from "covrt-types";
import { ReqErrRes } from "../..";
import { BaseRes } from "../../Base";

export enum GetGroupsCode {
	Success = 1,
	NotAllowed
}

type UserData = {
	uid: UserID;
	name: string;
	group: GroupID;
}

type Success = {
	res: GetGroupsCode.Success;
	groups: GroupData[];
	users: UserData[];
}

type Failure = {
	res: Exclude<GetGroupsCode, GetGroupsCode.Success>;
}

export type GetGroupsData = (Success | Failure);

export type GetGroupsRes = (BaseRes<'GetGroups'> & GetGroupsData) | ReqErrRes;
