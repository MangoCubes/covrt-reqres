import { ContainerID, EncGroupedItemData, FieldID, ItemID } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export type CreateFullItemsReq = {
	container: ContainerID;
	data: EncGroupedItemData[];
}

export enum CreateFullItemsCode {
	Success = 1,
	InvalidContainer
}

type Success = {
	res: CreateFullItemsCode.Success;
	iid: {
		id: ItemID;
		fields: FieldID[];
	}[];
}

type Failure = {
	res: Exclude<CreateFullItemsCode, CreateFullItemsCode.Success>;
}

export type CreateFullItemsData = Success | Failure;

export type CreateFullItemsRes = (BaseRes<'CreateFullItems'> & CreateFullItemsData) | ReqErrRes;