import { useLayoutEffect } from "react";
import { PlayerListener } from "textalive-app-api";
import { useJotaiPlayer } from "../jotai/useJotaiPlayer";

export const usePlayerListener = (listener: PlayerListener) => {
  const { player } = useJotaiPlayer();

  // leftのみを監視
  useLayoutEffect(() => {
    // 解除時にも同じ変数を参照
    const thisListener = listener;
    // イベントリスナーの登録
    player?.addListener(thisListener);
    return () => {
      // イベントリスナーの解除
      player?.removeListener(thisListener);
    };
  }, [listener, player]);
};
