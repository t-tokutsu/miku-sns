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
        bg={
          "linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))"
        }
        borderRadius={8}
        p={1}
        {...stackProps}
      >
        <HStack spacing={0}>
          <IconButton
            aria-label={isPlaying ? "停止" : "再生"}
            bg={"none"}
            color={"white"}
            fontSize={"3xl"}
            icon={isPlaying ? <MdPause /> : <MdPlayArrow />}
            onClick={togglePlay}
          />
          <HStack
            color={"white"}
            css={{
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
            }}
            overflow={"hidden"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {songName}
            </Text>
            <Text fontSize={"xs"}>{artistName}</Text>
          </HStack>
        </HStack>
      </Stack>
      <Hooks />
    </>
  );
};
