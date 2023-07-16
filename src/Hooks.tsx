import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { useUpdateJotaiArtistName } from "./features/player/jotai/useJotaiArtistName";
import { useUpdateJotaiDuration } from "./features/player/jotai/useJotaiDuration";
import { useUpdateJotaiIsPlaying } from "./features/player/jotai/useJotaiIsPlaying";
import { useUpdateJotaiPlayer } from "./features/player/jotai/useJotaiPlayer";
import { useUpdateJotaiPosition } from "./features/player/jotai/useJotaiPosition";
import { useUpdateJotaiSongName } from "./features/player/jotai/useJotaiSongName";

/** @package */
export const Hooks: FC = () => {
  const { mediaElementRef } = useUpdateJotaiPlayer();
  useUpdateJotaiSongName();
  useUpdateJotaiArtistName();
  useUpdateJotaiIsPlaying();
  useUpdateJotaiPosition();
  useUpdateJotaiDuration();
  return <Box display={"none"} ref={mediaElementRef} />;
};
