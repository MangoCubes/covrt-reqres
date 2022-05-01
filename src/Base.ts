import { ReqErr } from "./error/ReqErr";
import { ServerErr } from "./error/ServerErr";

export type ResTemplate<T, S extends keyof U, U> = {
	type: T;
	res: S;
	data: U[S];
}

export type BaseRes<T, S extends keyof U, U> = ResTemplate<T, S, U> | ReqErr | ServerErr;