import { AsymEnc, AsymEncType, GroupID, VaultID } from "covrt-types";
import { BaseRes } from "../../Base";
import { InvalidErrRes, InvalidType } from "../../error/InvalidErr";
import { NotAllowedErrRes } from "../../error/NotAllowedErr";
import { ReqErrRes } from "../../error/ReqErr";

export type InviteUserReq = {
	vid: VaultID;
    gid: GroupID;
    user: string; //Email
    key: AsymEnc<AsymEncType.GroupSymKey>;
}

export enum InviteUserCode {
	Success = 1
}

type Success = {
    res: InviteUserCode.Success;
}

type Failure = {
    res: Exclude<InviteUserCode, InviteUserCode.Success>;
}

export type InviteUserData = Success | Failure;

export type InviteUserRes = (BaseRes<'InviteUser'> & InviteUserData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Group | InvalidType.Vault | InvalidType.User>;