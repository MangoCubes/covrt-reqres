import { UserID, SymEnc, SymEncType, EncUserKeyPair } from "../../../covrt-types/dist";

export type AuthSuccess = {
	uid: UserID;
	token: string;
	sym: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncUserKeyPair;
}