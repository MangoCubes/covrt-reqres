import { FullEncContainerData } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { NotAllowedErrRes } from "../error/NotAllowedErr";
import { ReqErrRes } from "../error/ReqErr";

export enum GetContainerDataCode {
	Success = 1
}

type Success = {
	res: GetContainerDataCode.Success;
	data: FullEncContainerData;
}

type Failure = {
    res: Exclude<GetContainerDataCode, GetContainerDataCode.Success>;
}

export type GetContainerDataData = (Success | Failure);

export type GetContainerDataRes = (BaseRes<'GetContainerData'> & GetContainerDataData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Container | InvalidType.Vault>;