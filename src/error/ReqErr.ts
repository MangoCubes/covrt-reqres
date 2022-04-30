import { BaseRes } from "../Base";

export enum ReqErrCode{
	MissingBody = 10000
}

export type ReqErrData = {
	[ReqErrCode.MissingBody]: string;
}

export type ReqErr = BaseRes<'ReqErr', ReqErrCode, ReqErrData>;