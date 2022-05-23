import { BaseRes } from "../Base";
import { AccessToken, EncKeyPair, KeyPairType, SymEnc, SymEncType, UserID, VerificationKey } from "covrt-types";
import { ReqErrRes } from "../error/ReqErr";

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
	uid: UserID;
}

export type RegisterData = Success | DefaultRes;

export type RegisterRes = (BaseRes<'Register'> & RegisterData) | ReqErrRes;