import { ResTemplate } from "../Base";

export enum ServerErrCode{
	Default = -99999,
	SQLErr = -10000,
}

export type ServerErrData = {
	[ServerErrCode.Default]: null,
	[ServerErrCode.SQLErr]: null
}

export type ServerErr = ResTemplate<'ServerErr', ServerErrCode, ServerErrData>;