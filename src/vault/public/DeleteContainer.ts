import { InvalidErrRes, InvalidType, NotAllowedErrRes, ReqErrRes } from "../..";
import { BaseRes } from "../../Base";

export enum DeleteContainerCode {
	Success = 1
}

type Success = {
    res: DeleteContainerCode.Success;
}

type Failure = {
    res: Exclude<DeleteContainerCode, DeleteContainerCode.Success>;
}

export type DeleteContainerData = Success | Failure;

export type DeleteContainerRes = (BaseRes<'DeleteContainer'> & DeleteContainerData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Container | InvalidType.Vault>;