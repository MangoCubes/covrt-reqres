import { BaseRes } from "../Base";
import { EncUserKeyPair, SymEnc, SymEncType, UserID, VerificationKey } from "@covrt-types/";

export type RegisterRequest = {
	email: string;
	key: VerificationKey;
	symKey: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncUserKeyPair;
}

export enum RegisterCode{
	Success,
	AlreadyRegistered,
}

export type RegisterData = {
	[RegisterCode.Success]: {
		uid: UserID;
		token: string;
		sym: SymEnc<SymEncType.UserSymKey>;
		keyPair: EncUserKeyPair;
	};
	[RegisterCode.AlreadyRegistered]: null;
}

export type RegisterRes = BaseRes<'Register', RegisterCode, RegisterData>;