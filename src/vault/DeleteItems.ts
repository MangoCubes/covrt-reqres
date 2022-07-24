import { ContainerID, VaultID, ItemID } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { NotAllowedErrRes } from "../error/NotAllowedErr";
import { ReqErrRes } from "../error/ReqErr";

export type DeleteItemsReq = {
	container: ContainerID;
	vid: VaultID;
    items: ItemID[];
}

export enum DeleteItemsCode {
	Success = 1
}

type Success = {
    res: DeleteItemsCode.Success;
}

type Failure = {
    res: Exclude<DeleteItemsCode, DeleteItemsCode.Success>;
}

export type DeleteItemsData = Success | Failure;

export type DeleteItemsRes = (BaseRes<'DeleteItems'> & DeleteItemsData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Container | InvalidType.Vault | InvalidType.Item>;