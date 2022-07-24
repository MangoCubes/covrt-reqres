import { PermType } from "covrt-types";
import { BaseRes } from "../Base";

export type NotAllowedErrData = {
    res: PermType; //Missing permission
}

export type NotAllowedRes = BaseRes<'NotAllowed'> & NotAllowedErrData;