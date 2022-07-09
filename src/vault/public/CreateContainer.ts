import { AsymEnc, AsymEncType, ContainerID, EncKeyPair, KeyPairType, SymEnc, SymEncType } from "covrt-types";
import { BaseRes } from "../../Base";
import { ReqErrRes } from "../../error/ReqErr";

export type CreateContainerReq = {
	info: SymEnc<SymEncType.ContainerInfo>;
    key: AsymEnc<AsymEncType.ContainerSymKey>;
    keyPair: EncKeyPair<KeyPairType.Container>;
}

export enum CreateContainerCode {
	Success = 1,
	InvalidVault
}

type Success = {
    res: CreateContainerCode.Success;
    cid: ContainerID;
}

type Failure = {
    res: Omit<CreateContainerCode, CreateContainerCode.Success>;
}

export type CreateContainerData = Success | Failure;

export type CreateContainerRes = (BaseRes<'CreateContainer'> & CreateContainerData) | ReqErrRes;