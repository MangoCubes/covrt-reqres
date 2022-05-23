import { BaseRes } from "../Base";
import { AccessToken, UserID, VerificationKey } from "covrt-types";
import { ReqErrRes } from "../error/ReqErr";

export type LoginReq = {
	email: string;
	verification: VerificationKey;
}

export enum LoginCode{
	Success,
	NoMatch,
}

type DefaultRes = {
	res: Exclude<LoginCode, LoginCode.Success>;
}

type Success = {
	res: LoginCode.Success;
	token: AccessToken;
	uid: UserID;
}

export type LoginData = Success | DefaultRes;

export type LoginRes = (BaseRes<'Login'> & LoginData) | ReqErrRes;