import { BaseRes } from "../Base";
import { UserID, VerificationKey } from "@covrt-types/";

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
	};
	[LoginCode.NoMatch]: null;
}

export type LoginRes = BaseRes<'Login', LoginCode, LoginData>;