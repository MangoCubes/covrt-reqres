import { BaseRes } from "../Base";
import { EncUserKeyPair, SymEnc, SymEncType, UserID, VerificationKey } from "@covrt-types";
import { ServerErr } from "../error/ServerErr";

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

export type LoginRes = (BaseRes<'Login'> & (Success | DefaultRes)) | ServerErr;