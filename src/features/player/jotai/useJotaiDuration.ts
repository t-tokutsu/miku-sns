import { atom, useAtom } from "jotai";
import { usePlayerListener } from "../hooks/usePlayerListener";

const durationAtom = atom<number>(0);
durationAtom.debugLabel = "durationAtom";

export const useJotaiDuration = () => {
  const [duration, setDuration] = useAtom(durationAtom);
  return { duration, setDuration };
};

export const useUpdateJotaiDuration = () => {
  const { setDuration } = useJotaiDuration();

  usePlayerListener({
    onVideoReady: (v) => {
      setDuration(v.duration);
    },
  });
};
