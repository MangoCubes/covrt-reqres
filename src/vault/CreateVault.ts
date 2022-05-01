import { SymEnc, SymEncType, VaultID } from '@covrt-types';
import { BaseRes } from '../Base';

export type CreateVaultReq = {
	vault: string,
	isPrivate: boolean,
	contKey: SymEnc<SymEncType.ContSymKey>;
}

export enum CreateVaultCode{
	Success,
	NotAllowed,
	Duplicate
}

export type CreateVaultData = {
	[CreateVaultCode.Success]: {
		vid: VaultID;
	};
	[CreateVaultCode.NotAllowed]: null;
	[CreateVaultCode.Duplicate]: {
		vid: VaultID;
	};
}

export type CreateVaultRes = BaseRes<'CreateVault', CreateVaultCode, CreateVaultData>;