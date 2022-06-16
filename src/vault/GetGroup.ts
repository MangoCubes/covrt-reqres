import { GroupData } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum GetGroupCode {
	Success = 1,
    InvalidVault
}

type Success = {
	res: GetGroupCode.Success;
	data: GroupData;
}

type Failure = {
    res: GetGroupCode.InvalidVault;
}

export type GetGroupData = (Success | Failure);

export type GetGroupRes = (BaseRes<'GetGroup'> & GetGroupData) | ReqErrRes;