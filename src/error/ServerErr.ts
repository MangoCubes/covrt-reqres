import { BaseRes } from "../Base";

export enum ServerErrCode{
	Default,
	SQLErr,
}

type DefaultRes = {
	res: ServerErrCode.Default | ServerErrCode.SQLErr;
}

export type ServerErr = BaseRes<'ServerErr'> & (DefaultRes);