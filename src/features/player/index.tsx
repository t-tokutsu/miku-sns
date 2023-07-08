import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useTogglePlay } from "./hooks/useTogglePlay";
import { useJotaiArtistName } from "./jotai/useJotaiArtistName";
import { useJotaiIsPlaying } from "./jotai/useJotaiIsPlaying";
import { useJotaiSongName } from "./jotai/useJotaiSongName";

export const Player: FC = () => {
  const { togglePlay } = useTogglePlay();
  const { isPlaying } = useJotaiIsPlaying();
  const { artistName } = useJotaiArtistName();
  const { songName } = useJotaiSongName();
  return (
    <HStack bg={"blue.100"} bottom={0} h={"80px"} pos={"sticky"}>
      <Button onClick={togglePlay}>{isPlaying ? "停止" : "再生"}</Button>
      <Stack>
        <Text>{songName}</Text>
        <Text>{artistName}</Text>
      </Stack>
    </HStack>
  );
};
