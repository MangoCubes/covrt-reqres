import { GroupData } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { ReqErrRes } from "../error/ReqErr";

export enum GetGroupCode {
	Success = 1
}

type Success = {
	res: GetGroupCode.Success;
	data: GroupData;
}

type Failure = {
    res: Exclude<GetGroupCode, GetGroupCode.Success>;
}

export type GetGroupData = (Success | Failure);

export type GetGroupRes = (BaseRes<'GetGroup'> & GetGroupData) | ReqErrRes | InvalidErrRes<InvalidType.Vault>;