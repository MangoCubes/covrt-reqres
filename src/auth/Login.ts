import { BaseRes } from "../Base";
import { AccessToken, VerificationKey } from "covrt-types";
import { ServerErrRes } from "../error/ServerErr";

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
}

export type LoginData = Success | DefaultRes;

export type LoginRes = (BaseRes<'Login'> & LoginData) | ServerErrRes;