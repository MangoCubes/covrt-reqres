import { BaseRes } from "../Base";
import { AccessToken, EncKeyPair, KeyPairType, SymEnc, SymEncType, VerificationKey } from "covrt-types";
import { ServerErrRes } from "../error/ServerErr";

export type RegisterReq = {
	email: string;
	verification: VerificationKey;
	symKey: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncKeyPair<KeyPairType.User>;
}

export enum RegisterCode{
	Success,
	AlreadyRegistered,
}

type DefaultRes = {
	res: Exclude<RegisterCode, RegisterCode.Success>;
}

type Success = {
	res: RegisterCode.Success;
	token: AccessToken;
}

export type RegisterData = Success | DefaultRes;

export type RegisterRes = (BaseRes<'Register'> & RegisterData) | ServerErrRes;