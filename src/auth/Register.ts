import { BaseRes } from "../Base";
import { EncUserKeyPair, SymEnc, SymEncType, UserID, VerificationKey } from "@covrt-types";
import { ServerErrRes } from "../error/ServerErr";

export type RegisterReq = {
	email: string;
	key: VerificationKey;
	symKey: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncUserKeyPair;
}

export enum RegisterCode{
	Success,
	AlreadyRegistered,
}

type Success = {
	res: RegisterCode.Success;
	uid: UserID;
	token: string;
	sym: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncUserKeyPair;
}

type DefaultRes = {
	res: RegisterCode.AlreadyRegistered;
}

export type RegisterData = Success | DefaultRes;

export type RegisterRes = (BaseRes<'Register'> & RegisterData) | ServerErrRes;