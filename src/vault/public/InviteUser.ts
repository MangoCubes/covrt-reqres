import { AsymEnc, AsymEncType, GroupID, UserID, VaultID } from "covrt-types";
import { BaseRes } from "../../Base";
import { InvalidErrRes, InvalidType } from "../../error/InvalidErr";
import { NotAllowedErrRes } from "../../error/NotAllowedErr";
import { ReqErrRes } from "../../error/ReqErr";

export type InviteUserReq = {
    gid: GroupID;
    user: UserID;
    key: AsymEnc<AsymEncType.GroupSymKey>;
}

export enum InviteUserCode {
	Success = 1,
	Duplicate
}

type Success = {
    res: InviteUserCode.Success;
}

type Failure = {
    res: Exclude<InviteUserCode, InviteUserCode.Success>;
}

export type InviteUserData = Success | Failure;

export type InviteUserRes = (BaseRes<'InviteUser'> & InviteUserData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Group | InvalidType.Vault | InvalidType.User>;