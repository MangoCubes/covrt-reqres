import { FullEncContainerData } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum GetContainerDataCode{
	Success,
    InvalidContainer
}

type Success = {
	res: GetContainerDataCode.Success;
	data: FullEncContainerData;
}

type Failure = {
    res: GetContainerDataCode.InvalidContainer;
}

export type GetContainerDataData = (Success | Failure);

export type GetContainerDataRes = (BaseRes<'GetContainerData'> & GetContainerDataData) | ReqErrRes;