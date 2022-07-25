import { BaseGroupData, GroupID, UserID } from "covrt-types";
import { InvalidErrRes, InvalidType, ReqErrRes } from "../..";
import { BaseRes } from "../../Base";

export enum GetAllGroupsCode {
	Success = 1
}

export type GroupUserData = {
	uid: UserID;
	name: string;
	gid: GroupID;
}

type Success = {
	res: GetAllGroupsCode.Success;
	groups: BaseGroupData[];
	users: GroupUserData[];
}

type Failure = {
	res: Exclude<GetAllGroupsCode, GetAllGroupsCode.Success>;
}

export type GetAllGroupsData = (Success | Failure);

export type GetAllGroupsRes = (BaseRes<'GetAllGroups'> & GetAllGroupsData) | ReqErrRes | InvalidErrRes<InvalidType.Vault>;
