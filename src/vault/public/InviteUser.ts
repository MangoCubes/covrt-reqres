import { AsymEnc, AsymEncType, GroupID, VaultID } from "covrt-types";
import { BaseRes } from "../../Base";
import { ReqErrRes } from "../../error/ReqErr";

export type InviteUserReq = {
	vid: VaultID;
    gid: GroupID;
    user: string; //Email
    key: AsymEnc<AsymEncType.GroupSymKey>;
}

export enum InviteUserCode {
	Success = 1,
	InvalidUser
}

type Success = {
    res: InviteUserCode.Success;
}

type Failure = {
    res: Exclude<InviteUserCode, InviteUserCode.Success>;
}

export type InviteUserData = Success | Failure;

export type InviteUserRes = (BaseRes<'InviteUser'> & InviteUserData) | ReqErrRes;