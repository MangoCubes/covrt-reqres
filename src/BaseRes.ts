export type BaseRes<T, S extends keyof U, U> = {
	type: T;
	res: S;
	data: U[S];
}