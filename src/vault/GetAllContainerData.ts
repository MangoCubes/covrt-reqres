import { FullEncContainerData, GroupData } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum GetAllContainerDataCode {
	Success = 1,
    InvalidVault
}

type Success = {
	res: GetAllContainerDataCode.Success;
	data: FullEncContainerData[];
	group: GroupData;
}

type Failure = {
    res: GetAllContainerDataCode.InvalidVault;
}

export type GetAllContainerDataData = (Success | Failure);

export type GetAllContainerDataRes = (BaseRes<'GetAllContainerData'> & GetAllContainerDataData) | ReqErrRes;