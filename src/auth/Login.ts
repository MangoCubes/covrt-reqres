import { BaseRes } from "../Base";
import { VerificationKey } from "covrt-types";
import { ServerErrRes } from "../error/ServerErr";
import { AuthSuccess } from "./AuthSuccess";

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

export type LoginData = (AuthSuccess & {res: LoginCode.Success}) | DefaultRes;

export type LoginRes = (BaseRes<'Login'> & LoginData) | ServerErrRes;