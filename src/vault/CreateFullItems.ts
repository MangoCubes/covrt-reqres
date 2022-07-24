import { ContainerID, EncGroupedItemData, FieldID, ItemID } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { NotAllowedErrRes } from "../error/NotAllowedErr";
import { ReqErrRes } from "../error/ReqErr";

export type CreateFullItemsReq = {
	container: ContainerID;
	data: EncGroupedItemData[];
}

export enum CreateFullItemsCode {
	Success = 1
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

export type CreateFullItemsRes = (BaseRes<'CreateFullItems'> & CreateFullItemsData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Container | InvalidType.Vault>;