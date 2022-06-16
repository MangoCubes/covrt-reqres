import { BaseRes } from "../Base";

export enum ServerErrCode {
	Default = 1,
	SQLErr,
}

type DefaultRes = {
	res: ServerErrCode.Default | ServerErrCode.SQLErr;
}

export type ServerErrData = DefaultRes;

export type ServerErrRes = BaseRes<'ServerErr'> & ServerErrData;