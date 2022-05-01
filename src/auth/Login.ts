import { BaseRes } from "../Base";
import { EncUserKeyPair, SymEnc, SymEncType, UserID, VerificationKey } from "@covrt-types";
import { ServerErrRes } from "../error/ServerErr";

export type LoginReq = {
	email: string;
	verification: VerificationKey;
}

export enum LoginCode{
	Success,
	NoMatch,
}

type Success = {
	res: LoginCode.Success;
	uid: UserID;
	token: string;
	sym: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncUserKeyPair;
}

type DefaultRes = {
	res: LoginCode.NoMatch;
}

export type LoginData = Success | DefaultRes;

export type LoginRes = (BaseRes<'Login'> & LoginData) | ServerErrRes;