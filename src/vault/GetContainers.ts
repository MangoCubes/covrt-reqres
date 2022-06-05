import { EncContainer } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum GetContainersCode{
	Success,
    InvalidVault
}

type Success = {
	res: GetContainersCode.Success;
	data: EncContainer[];
}

type Failure = {
    res: GetContainersCode.InvalidVault;
}

export type GetContainersData = (Success | Failure);

export type GetContainersRes = (BaseRes<'GetContainers'> & GetContainersData) | ReqErrRes;