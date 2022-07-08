import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum DeleteItemsCode {
	Success = 1,
	InvalidItems
}

type Success = {
    res: DeleteItemsCode.Success;
}

type Failure = {
    res: Omit<DeleteItemsCode, DeleteItemsCode.Success>;
}

export type DeleteItemsData = Success | Failure;

export type DeleteItemsRes = (BaseRes<'DeleteItems'> & DeleteItemsData) | ReqErrRes;