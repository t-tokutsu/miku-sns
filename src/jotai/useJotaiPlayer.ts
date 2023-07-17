import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { Player } from "textalive-app-api";

const playerAtom = atom<Player | undefined>(undefined);
playerAtom.debugLabel = "playerAtom";

export const useJotaiPlayer = () => {
  const [player, setPlayer] = useAtom(playerAtom);
  return { player, setPlayer };
};

const isPlayerLoadedAtom = atom<boolean>(false);
isPlayerLoadedAtom.debugLabel = "isPlayerLoadedAtom";

export const useJotaiIsPlayerLoaded = () => {
  const [isPlayerLoaded, setIsPlayerLoaded] = useAtom(isPlayerLoadedAtom);
  return { isPlayerLoaded, setIsPlayerLoaded };
};

export const useUpdateJotaiPlayer = () => {
  const { player, setPlayer } = useJotaiPlayer();
  const { setIsPlayerLoaded } = useJotaiIsPlayerLoaded();
  const mediaElementRef = useRef<HTMLDivElement>(null);

  // playerの指定
  useEffect(() => {
    setPlayer(
      new Player({
        app: { token: "YfmLXwu5z1qYwGkT" },
        mediaElement: mediaElementRef.current ?? undefined,
      })
    );
    return () => {
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

  useEffect(() => {
    // 監視対象の指定
    const targetElement = mediaElementRef.current;
    if (!targetElement) return;

    // 監視内容の設定
    const observer = new MutationObserver((mutationCallback) => {
      mutationCallback.forEach((mutationRecord) => {
        mutationRecord.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeName === "AUDIO") {
            setIsPlayerLoaded(true);
          }
        });
      });
    });
    // 監視の開始
    observer.observe(targetElement, {
      attributes: true,
      subtree: true,
      childList: true,
    });
  }, [setIsPlayerLoaded]);

  return {
    mediaElementRef,
  };
};
