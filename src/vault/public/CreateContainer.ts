import { ContainerID, SymEnc, SymEncType } from "covrt-types";
import { BaseRes } from "../../Base";
import { ReqErrRes } from "../../error/ReqErr";

export type CreateContainerReq = {
    name: string;
    key: SymEnc<SymEncType.ContainerSymKey>;
}

export enum CreateContainerCode{
	Success,
	NotAllowed,
    InvalidName,
	Private
}

type Success = {
    res: CreateContainerCode.Success;
    cid: ContainerID;
}

type Failure = {
    res: Omit<CreateContainerCode, CreateContainerCode.Success>;
}

export type CreateContainerData = Success | Failure;

export type CreateContainerRes = (BaseRes<'CreateGroup'> & CreateContainerData) | ReqErrRes;