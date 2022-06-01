import { ContainerID, EncItemData, ItemID } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export type CreateItemsReq = {
	container: ContainerID;
	data: EncItemData[];
}

export enum CreateItemsCode{
	Success,
	InvalidContainer
}

type Success = {
	res: CreateItemsCode.Success;
	iid: ItemID[];
}

type Failure = {
	res: Exclude<CreateItemsCode, CreateItemsCode.Success>;
}

export type CreateItemsData = Success | Failure;

export type CreateItemsRes = (BaseRes<'CreateItems'> & CreateItemsData) | ReqErrRes;