import { BaseRes } from "../Base";
import { ServerErrRes } from "../error/ServerErr";
import { AuthSuccess } from "./AuthSuccess";

export enum TokenAuthCode{
	Success,
	NoToken,
    InvalidToken
}

type DefaultRes = {
    res: Exclude<TokenAuthCode, TokenAuthCode.Success>;
}

export type TokenAuthData = (AuthSuccess & {res: TokenAuthCode.Success}) | DefaultRes;

export type TokenAuthRes = (BaseRes<'TokenAuth'> & TokenAuthData) | ServerErrRes;