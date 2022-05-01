import { BaseRes } from "../Base";

export enum ReqErrCode{
	MissingBody,
	MissingProperty,
}

type DefaultRes = {
	res: ReqErrCode.MissingBody;
}

type MissingProperty = {
	res: ReqErrCode.MissingProperty;
	data: string;
}

export type ReqErr = BaseRes<'ReqErr'> & (DefaultRes | MissingProperty);