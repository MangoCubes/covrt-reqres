import { ContainerID, EncFieldData, FieldID } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export type CreateFieldsReq = {
	container: ContainerID;
	data: EncFieldData[];
}

export enum CreateFieldsCode {
	Success = 1,
	InvalidContainer
}

type Success = {
	res: CreateFieldsCode.Success;
	fid: FieldID[];
}

type Failure = {
	res: Exclude<CreateFieldsCode, CreateFieldsCode.Success>;
}

export type CreateFieldsData = Success | Failure;

export type CreateFieldsRes = (BaseRes<'CreateFields'> & CreateFieldsData) | ReqErrRes;