import { atom, useAtom } from "jotai";

const parentPostIdAtom = atom<string | undefined>(undefined);
parentPostIdAtom.debugLabel = "parentPostIdAtom";

export const useJotaiParentPostId = () => {
  const [parentPostId, setParentPostId] = useAtom(parentPostIdAtom);
  return { parentPostId, setParentPostId };
};
