export enum ReqErrCode{
	Default = -99999,
	SQLErr = 10000,
}

export enum GenErrCode{
	MissingBody
}

export enum ResType{
	GenErr,
	ReqErr,
}

export type ResCode = {
	[ResType.ReqErr]: ReqErrCode;
	[ResType.GenErr]: GenErrCode;
}

export type ResBase<T extends ResType> = {
	type: T;
	res: ResCode[T];
}