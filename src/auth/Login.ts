import { BaseRes } from "../Base";
import { EncUserKeyPair, SymEnc, SymEncType, UserID, VerificationKey } from "@covrt-types";

export type LoginReq = {
	email: string;
	verification: VerificationKey;
}

export enum LoginCode{
	Success,
	NoMatch,
}

export type LoginData = {
	[LoginCode.Success]: {
		uid: UserID;
		token: string;
		sym: SymEnc<SymEncType.UserSymKey>;
		keyPair: EncUserKeyPair;
	};
	[LoginCode.NoMatch]: null;
}

export type LoginRes = BaseRes<'Login', LoginCode, LoginData>;