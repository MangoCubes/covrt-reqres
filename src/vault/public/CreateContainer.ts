import { AsymEnc, AsymEncType, ContainerID, EncKeyPair, KeyPairType, SymEnc, SymEncType } from "covrt-types";
import { BaseRes } from "../../Base";
import { InvalidErrRes, InvalidType } from "../../error/InvalidErr";
import { NotAllowedErrRes } from "../../error/NotAllowedErr";
import { ReqErrRes } from "../../error/ReqErr";

export type CreateContainerReq = {
	info: SymEnc<SymEncType.ContainerInfo>;
    key: AsymEnc<AsymEncType.ContainerSymKey>;
    keyPair: EncKeyPair<KeyPairType.Container>;
}

export enum CreateContainerCode {
	Success = 1
}

type Success = {
    res: CreateContainerCode.Success;
    cid: ContainerID;
}

type Failure = {
    res: Exclude<CreateContainerCode, CreateContainerCode.Success>;
}

export type CreateContainerData = Success | Failure;

export type CreateContainerRes = (BaseRes<'CreateContainer'> & CreateContainerData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Vault>;