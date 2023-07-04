import { useJotaiIsPlaying } from "../jotai/useJotaiIsPlaying";
import { useJotaiPlayer } from "../jotai/useJotaiPlayer";
import { useJotaiPosition } from "../jotai/useJotaiPosition";

export const useTogglePlay = () => {
  const { isPlaying } = useJotaiIsPlaying();
  const { player } = useJotaiPlayer();
  const { position } = useJotaiPosition();

  /** 再生 / 一時停止 をトグル */
  const togglePlay = () => {
    if (isPlaying) {
      player?.requestPause();
    } else {
      if (position === 0) {
        player?.requestStop();
      }
      player?.requestPlay();
    }
  };

  return { togglePlay };
};
