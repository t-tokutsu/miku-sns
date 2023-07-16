import { atom, useAtom } from "jotai";

const playerIsShowAtom = atom<boolean>(false);
playerIsShowAtom.debugLabel = "playerIsShowAtom";

export const useJotaiPlayerIsShow = () => {
  const [playerIsShow, setPlayerIsShow] = useAtom(playerIsShowAtom);

  return { playerIsShow, setPlayerIsShow };
};
