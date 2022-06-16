import { EncUserData } from "covrt-types";
import { BaseRes } from "../Base";
import { ReqErrRes } from "../error/ReqErr";

export enum TokenAuthCode {
	Success = 1,
	NoToken,
    InvalidToken
}

type DefaultRes = {
    res: Exclude<TokenAuthCode, TokenAuthCode.Success>;
}

export type TokenAuthData = (EncUserData & {res: TokenAuthCode.Success}) | DefaultRes;

export type TokenAuthRes = (BaseRes<'TokenAuth'> & TokenAuthData) | ReqErrRes;