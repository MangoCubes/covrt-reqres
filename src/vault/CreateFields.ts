import { ContainerID, EncFieldData, FieldID } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { NotAllowedErrRes } from "../error/NotAllowedErr";
import { ReqErrRes } from "../error/ReqErr";

export type CreateFieldsReq = {
	container: ContainerID;
	data: EncFieldData[];
}

export enum CreateFieldsCode {
	Success = 1
}

type Success = {
	res: CreateFieldsCode.Success;
	fid: FieldID[];
}

type Failure = {
	res: Exclude<CreateFieldsCode, CreateFieldsCode.Success>;
}

export type CreateFieldsData = Success | Failure;

export type CreateFieldsRes = (BaseRes<'CreateFields'> & CreateFieldsData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Container | InvalidType.Vault | InvalidType.Item>;