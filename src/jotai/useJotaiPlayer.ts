import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { Player } from "textalive-app-api";

const playerAtom = atom<Player | undefined>(undefined);
playerAtom.debugLabel = "playerAtom";

export const useJotaiPlayer = () => {
  const [player, setPlayer] = useAtom(playerAtom);
  return { player, setPlayer };
};

export const useUpdateJotaiPlayer = () => {
  const { player, setPlayer } = useJotaiPlayer();
  const mediaElementRef = useRef<HTMLDivElement>(null);

  // playerの指定
  useEffect(() => {
    const onLoad = () => {
      setPlayer(
        new Player({
          app: { token: "YfmLXwu5z1qYwGkT" },
          mediaElement: mediaElementRef.current ?? undefined,
        })
      );
    };
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      setPlayer(undefined);
    };
  }, [setPlayer]);

  // 楽曲の指定
  useEffect(() => {
    player?.createFromSongUrl(`https://piapro.jp/t/Wk83/20230203141007`, {
      video: {
        // 音楽地図訂正履歴: https://songle.jp/songs/2427952/history
        beatId: 4267381,
        chordId: 2405285,
        repetitiveSegmentId: 2475676,
        // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FWk83%2F20230203141007
        lyricId: 56812 /* 6月27日更新 */,
        lyricDiffId: 10668 /* 6月27日更新 */,
      },
    });
  }, [player]);

  return {
    mediaElementRef,
  };
};