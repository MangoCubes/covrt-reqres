import { BaseGroupData, GroupID, UserID } from "covrt-types";
import { ReqErrRes } from "../..";
import { BaseRes } from "../../Base";

export enum GetGroupsCode {
	Success = 1,
	NotAllowed
}

export type GroupUserData = {
	uid: UserID;
	name: string;
	gid: GroupID;
}

type Success = {
	res: GetGroupsCode.Success;
	groups: BaseGroupData[];
	users: GroupUserData[];
}

type Failure = {
	res: Exclude<GetGroupsCode, GetGroupsCode.Success>;
}

export type GetGroupsData = (Success | Failure);

export type GetGroupsRes = (BaseRes<'GetGroups'> & GetGroupsData) | ReqErrRes;
