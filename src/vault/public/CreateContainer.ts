import { AsymEnc, AsymEncType, ContainerID, EncKeyPair, KeyPairType } from "covrt-types";
import { BaseRes } from "../../Base";
import { ReqErrRes } from "../../error/ReqErr";

export type CreateContainerReq = {
    name: string;
    key: AsymEnc<AsymEncType.ContainerSymKey>;
    keyPair: EncKeyPair<KeyPairType.Container>;
}

export enum CreateContainerCode {
	Success = 1,
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