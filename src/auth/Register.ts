import { BaseRes } from "../Base";
import { EncUserKeyPair, SymEnc, SymEncType, VerificationKey } from "@covrt-types";
import { ServerErrRes } from "../error/ServerErr";
import { AuthSuccess } from "./AuthSuccess";

export type RegisterReq = {
	email: string;
	verification: VerificationKey;
	symKey: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncUserKeyPair;
}

export enum RegisterCode{
	Success,
	AlreadyRegistered,
}

type DefaultRes = {
	res: Exclude<RegisterCode, RegisterCode.Success>;
}

export type RegisterData = (AuthSuccess & {res: RegisterCode.Success}) | DefaultRes;

export type RegisterRes = (BaseRes<'Register'> & RegisterData) | ServerErrRes;