import { ReqErrRes } from "../..";
import { BaseRes } from "../../Base";

export enum DeleteContainerCode {
	Success = 1,
	InvalidVault,
	InvalidContainer
}

type Success = {
    res: DeleteContainerCode.Success;
}

type Failure = {
    res: Omit<DeleteContainerCode, DeleteContainerCode.Success>;
}

export type DeleteContainerData = Success | Failure;

export type DeleteContainerRes = (BaseRes<'DeleteContainer'> & DeleteContainerData) | ReqErrRes;