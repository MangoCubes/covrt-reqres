import { EncUserData } from "covrt-types";
import { BaseRes } from "../Base";
import { ServerErrRes } from "../error/ServerErr";

export enum TokenAuthCode{
	Success,
	NoToken,
    InvalidToken
}

type DefaultRes = {
    res: Exclude<TokenAuthCode, TokenAuthCode.Success>;
}

export type TokenAuthData = (EncUserData & {res: TokenAuthCode.Success}) | DefaultRes;

export type TokenAuthRes = (BaseRes<'TokenAuth'> & TokenAuthData) | ServerErrRes;