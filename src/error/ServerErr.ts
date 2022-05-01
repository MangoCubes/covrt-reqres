import { BaseRes } from "../Base";

export enum ServerErrCode{
	Default,
	SQLErr,
}

type DefaultRes = {
	res: ServerErrCode.Default | ServerErrCode.SQLErr;
}

export type ServerErrData = DefaultRes;

export type ServerErrRes = BaseRes<'ServerErr'> & ServerErrData;