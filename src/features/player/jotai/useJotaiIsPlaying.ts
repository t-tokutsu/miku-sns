import { atom, useAtom } from "jotai";
import { usePlayerListener } from "../hooks/usePlayerListener";

const isPlayingAtom = atom<boolean>(false);
isPlayingAtom.debugLabel = "isPlayingAtom";

export const useJotaiIsPlaying = () => {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  return { isPlaying, setIsPlaying };
};

export const useUpdateJotaiIsPlaying = () => {
  const { setIsPlaying } = useJotaiIsPlaying();

  usePlayerListener({
    onTimerReady: () => {
      setIsPlaying(false);
    },
    onPlay: () => {
      setIsPlaying(true);
    },
    onPause: () => {
      setIsPlaying(false);
    },
  });
};
