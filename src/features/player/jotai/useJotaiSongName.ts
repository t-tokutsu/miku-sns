import { atom, useAtom } from "jotai";
import { usePlayerListener } from "../hooks/usePlayerListener";
import { useJotaiPlayer } from "./useJotaiPlayer";

const songNameAtom = atom<string>("");
songNameAtom.debugLabel = "songNameAtom";

export const useJotaiSongName = () => {
  const [songName, setSongName] = useAtom(songNameAtom);

  return { songName, setSongName };
};

export const useUpdateJotaiSongName = () => {
  const { player } = useJotaiPlayer();
  const { setSongName } = useJotaiSongName();

  usePlayerListener({
    onVideoReady: () => {
      setSongName(player?.data.song.name ?? "");
    },
  });
};
