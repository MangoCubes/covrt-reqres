import { BaseRes } from "../Base";
import { ServerErrRes } from "./ServerErr";

export enum ReqErrCode{
	MissingBody,
	MissingProperty,
	MissingToken,
	InvalidToken
}

type DefaultRes = {
	res: ReqErrCode.MissingBody | ReqErrCode.MissingToken | ReqErrCode.InvalidToken;
}

type MissingProperty = {
	res: ReqErrCode.MissingProperty;
	prop: string;
}

export type ReqErrData = DefaultRes | MissingProperty;

export type ReqErrRes = (BaseRes<'ReqErr'> & ReqErrData) | ServerErrRes;