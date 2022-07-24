import { FullEncContainerData, GroupData } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { NotAllowedErrRes } from "../error/NotAllowedErr";
import { ReqErrRes } from "../error/ReqErr";

export enum GetAllContainerDataCode {
	Success = 1
}

type Success = {
	res: GetAllContainerDataCode.Success;
	data: FullEncContainerData[];
	group: GroupData;
}

type Failure = {
    res: Exclude<GetAllContainerDataCode, GetAllContainerDataCode.Success>;
}

export type GetAllContainerDataData = (Success | Failure);

export type GetAllContainerDataRes = (BaseRes<'GetAllContainerData'> & GetAllContainerDataData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Vault>;