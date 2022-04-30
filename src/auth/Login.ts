import { BaseRes } from "../BaseRes";
import { UserID } from "@covrt-types/";

export enum LoginCode{
	Success
}

export type LoginData = {
	[LoginCode.Success]: {
		uid: UserID;
	};
}

export type LoginRes = BaseRes<'Login', LoginCode, LoginData>;