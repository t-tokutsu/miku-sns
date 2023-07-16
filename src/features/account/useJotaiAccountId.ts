import { atom, useAtom } from "jotai";
import { TypeAccountId } from "../posts/data/accounts";

const accountIdAtom = atom<TypeAccountId | undefined>(undefined);
accountIdAtom.debugLabel = "accountIdAtom";

export const useJotaiAccountId = () => {
  const [accountId, setAccountId] = useAtom(accountIdAtom);
  return { accountId, setAccountId };
};
