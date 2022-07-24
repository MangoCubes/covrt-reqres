import { EncKeyPair, GroupID, KeyPairType, SymEnc, SymEncType } from 'covrt-types';
import { AsymEnc, AsymEncType } from 'covrt-types/dist/encryption/AsymEnc';
import { BaseRes } from '../../Base';
import { InvalidErrRes, InvalidType } from '../../error/InvalidErr';
import { NotAllowedErrRes } from '../../error/NotAllowedErr';
import { ReqErrRes } from '../../error/ReqErr';

export type CreateGroupReq = {
    data: SymEnc<SymEncType.GroupInfo>;
	pubData: SymEnc<SymEncType.GroupPubInfo>;
	vKey: SymEnc<SymEncType.VaultKey>;
    key: AsymEnc<AsymEncType.GroupSymKey>;
	keyPair: EncKeyPair<KeyPairType.Group>;
}

export enum CreateGroupCode {
	Success = 1,
	InvalidPermission,
	Private
}

type Success = {
	res: CreateGroupCode.Success;
	gid: GroupID;
}

type DefaultRes = {
	res: Exclude<CreateGroupCode, CreateGroupCode.Private>;
}

type InvalidPermission = {
	res: CreateGroupCode.InvalidPermission;
	permission: string;
}

export type CreateGroupData = Success | DefaultRes | InvalidPermission;

export type CreateGroupRes = (BaseRes<'CreateGroup'> & CreateGroupData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Vault>;