import { FullEncContainerData } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum GetAllContainerDataCode{
	Success,
    InvalidVault
}

type Success = {
	res: GetAllContainerDataCode.Success;
	data: FullEncContainerData[];
}

type Failure = {
    res: GetAllContainerDataCode.InvalidVault;
}

export type GetAllContainerDataData = (Success | Failure);

export type GetAllContainerDataRes = (BaseRes<'GetAllContainerData'> & GetAllContainerDataData) | ReqErrRes;