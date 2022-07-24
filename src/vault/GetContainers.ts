import { EncContainer } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { NotAllowedErrRes } from "../error/NotAllowedErr";
import { ReqErrRes } from "../error/ReqErr";

export enum GetContainersCode {
	Success = 1
}

type Success = {
	res: GetContainersCode.Success;
	data: EncContainer[];
}

type Failure = {
    res: Exclude<GetContainersCode, GetContainersCode.Success>;
}

export type GetContainersData = (Success | Failure);

export type GetContainersRes = (BaseRes<'GetContainers'> & GetContainersData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Vault>;