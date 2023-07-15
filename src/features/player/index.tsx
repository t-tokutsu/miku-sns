import { HStack, IconButton, Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MdPlayArrow, MdPause } from "react-icons/md";
import { Hooks } from "./Hooks";
import { useTogglePlay } from "./hooks/useTogglePlay";
import { useJotaiArtistName } from "./jotai/useJotaiArtistName";
import { useJotaiIsPlaying } from "./jotai/useJotaiIsPlaying";
import { useJotaiSongName } from "./jotai/useJotaiSongName";

export const Player: FC<StackProps> = ({ ...stackProps }) => {
  const { togglePlay } = useTogglePlay();
  const { isPlaying } = useJotaiIsPlaying();
  const { artistName } = useJotaiArtistName();
  const { songName } = useJotaiSongName();
  return (
    <>
      <Stack
        backdropFilter={"blur(3px)"}
        bg={
          "linear-gradient(90deg,rgba(255,255,255,.95) 15.59%,rgba(255,255,255,.55) 44.64%,rgba(255,255,255,.5) 100%)"
        }
        borderRadius={12}
        boxShadow={"xl"}
        p={4}
        {...stackProps}
      >
        <HStack>
          <IconButton
            aria-label={isPlaying ? "停止" : "再生"}
            fontSize={"2xl"}
            icon={isPlaying ? <MdPause /> : <MdPlayArrow />}
            onClick={togglePlay}
          />
          <HStack>
            <Text fontWeight={"bold"}>{songName}</Text>
            <Text fontSize={"sm"}>{artistName}</Text>
          </HStack>
        </HStack>
      </Stack>
      <Hooks />
    </>
  );
};
