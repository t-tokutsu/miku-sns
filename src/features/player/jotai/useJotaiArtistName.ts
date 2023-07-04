import { atom, useAtom } from "jotai";
import { usePlayerListener } from "../hooks/usePlayerListener";
import { useJotaiPlayer } from "./useJotaiPlayer";

const artistNameAtom = atom<string>("");
artistNameAtom.debugLabel = "artistNameAtom";

export const useJotaiArtistName = () => {
  const [artistName, setArtistName] = useAtom(artistNameAtom);

  return { artistName, setArtistName };
};

export const useUpdateJotaiArtistName = () => {
  const { player } = useJotaiPlayer();
  const { setArtistName } = useJotaiArtistName();

  usePlayerListener({
    onVideoReady: () => {
      setArtistName(player?.data.song.artist.name ?? "");
    },
  });
};
