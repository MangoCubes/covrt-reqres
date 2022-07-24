import { ExportedPubKey, KeyPairType, UserID } from "covrt-types";
import { BaseRes } from "../Base";
import { InvalidErrRes, InvalidType } from "../error/InvalidErr";
import { ReqErrRes } from "../error/ReqErr";

export type GetUserPubKeyReq = {
    user: string | UserID; //Email
}

export enum GetUserPubKeyCode {
	Success = 1
}

type Success = {
    res: GetUserPubKeyCode.Success;
    uid: UserID;
    key: ExportedPubKey<KeyPairType.User>;
}

type Failure = {
    res: Exclude<GetUserPubKeyCode, GetUserPubKeyCode.Success>;
}

export type GetUserPubKeyData = Success | Failure;

export type GetUserPubKeyRes = (BaseRes<'GetUserPubKey'> & GetUserPubKeyData) | ReqErrRes | InvalidErrRes<InvalidType.User>;