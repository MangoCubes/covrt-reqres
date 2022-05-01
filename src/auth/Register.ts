import { BaseRes } from "../Base";
import { EncUserKeyPair, SymEnc, SymEncType, UserID, VerificationKey } from "@covrt-types";

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

export type RegisterRes = BaseRes<'Register'> & (Success | DefaultRes);