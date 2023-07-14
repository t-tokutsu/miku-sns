import { HStack, Icon, Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MdPlayArrow, MdPause } from "react-icons/md";
import { Hooks } from "./Hooks";
import { useTogglePlay } from "./hooks/useTogglePlay";
import { useJotaiArtistName } from "./jotai/useJotaiArtistName";
import { useJotaiIsPlaying } from "./jotai/useJotaiIsPlaying";
import { useJotaiSongName } from "./jotai/useJotaiSongName";
import { MusicSlider } from "./MusicSlider";

export const Player: FC<StackProps> = ({ ...stackProps }) => {
  const { togglePlay } = useTogglePlay();
  const { isPlaying } = useJotaiIsPlaying();
  const { artistName } = useJotaiArtistName();
  const { songName } = useJotaiSongName();
  return (
    <>
      <Stack bg={"blue.100"} borderRadius={4} p={4} {...stackProps}>
        <HStack>
          <HStack as={"button"} onClick={togglePlay}>
            <Icon as={isPlaying ? MdPause : MdPlayArrow} fontSize={36} />
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>{songName}</Text>
            <Text fontSize={"sm"}>{artistName}</Text>
          </HStack>
        </HStack>
        <MusicSlider />
      </Stack>
      <Hooks />
    </>
  );
};
