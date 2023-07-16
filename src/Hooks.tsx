import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { useUpdateJotaiArtistName } from "./jotai/useJotaiArtistName";
import { useUpdateJotaiDuration } from "./jotai/useJotaiDuration";
import { useUpdateJotaiIsPlaying } from "./jotai/useJotaiIsPlaying";
import { useUpdateJotaiPlayer } from "./jotai/useJotaiPlayer";
import { useUpdateJotaiPosition } from "./jotai/useJotaiPosition";
import { useUpdateJotaiSongName } from "./jotai/useJotaiSongName";

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
