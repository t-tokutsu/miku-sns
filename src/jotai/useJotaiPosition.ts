import { atom, useAtom } from "jotai";
import { usePlayerListener } from "../features/player/hooks/usePlayerListener";

const positionAtom = atom<number>(0);
positionAtom.debugLabel = "positionAtom";

export const useJotaiPosition = () => {
  const [position, setPosition] = useAtom(positionAtom);
  return { position, setPosition };
};

/**
 * 再生位置（ミリ秒）
 */
export const useUpdateJotaiPosition = () => {
  const { setPosition } = useJotaiPosition();

  usePlayerListener({
    onMediaSeek: (position) => {
      setPosition(position);
    },
    onTimeUpdate: (position) => {
      setPosition(position);
    },
  });
};
