import { ContainerID, EncKeyPair, GroupID, KeyPairType, Permission, SymEnc, SymEncType, Targeted, Untargeted } from 'covrt-types';
import { BaseRes } from '../../Base';
import { InvalidErrRes, InvalidType } from '../../error/InvalidErr';
import { NotAllowedErrRes } from '../../error/NotAllowedErr';
import { ReqErrRes } from '../../error/ReqErr';

export type CreateGroupReq = {
    data: SymEnc<SymEncType.GroupInfo>;
	pubData: SymEnc<SymEncType.GroupPubInfo>;
	vKey: SymEnc<SymEncType.VaultKey>;
	keyPair: EncKeyPair<KeyPairType.Group>;
	groupAccessKey: SymEnc<SymEncType.GroupSymKey>;
	permissions: Permission;
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
	res: Exclude<CreateGroupCode, CreateGroupCode.Success | CreateGroupCode.InvalidPermission>;
}

type InvalidPermission = {
	res: CreateGroupCode.InvalidPermission;
} & ({
	permission: Untargeted;
} | {
	permission: Targeted;
	cid: ContainerID;
})

export type CreateGroupData = Success | DefaultRes | InvalidPermission;

export type CreateGroupRes = (BaseRes<'CreateGroup'> & CreateGroupData) | ReqErrRes | NotAllowedErrRes | InvalidErrRes<InvalidType.Vault>;