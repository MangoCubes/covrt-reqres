import { BaseRes } from "../Base";
import { ServerErrRes } from "./ServerErr";

export enum ReqErrCode{
	MissingBody,
	MissingProperty,
}

type DefaultRes = {
	res: ReqErrCode.MissingBody;
}

type MissingProperty = {
	res: ReqErrCode.MissingProperty;
	prop: string;
}

export type ReqErrData = DefaultRes | MissingProperty;

export type ReqErrRes = (BaseRes<'ReqErr'> & ReqErrData) | ServerErrRes;