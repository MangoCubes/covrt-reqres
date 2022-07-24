import { BaseRes } from "../Base";

export enum InvalidType {
    Vault,
    User,
    Group,
    Item,
    Field
}

export type InvalidErrData<T extends InvalidType> = {
    res: T;
}

export type InvalidErrRes<T extends InvalidType> = BaseRes<'InvalidErr'> & InvalidErrData<T>;