import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { useTogglePlay } from "../../features/player/hooks/useTogglePlay";
import { useJotaiPlayerIsShow } from "../../features/player/jotai/useJotaiPlayerIsShow";
import { useJotaiArtistName } from "../../jotai/useJotaiArtistName";
import { useJotaiIsPlaying } from "../../jotai/useJotaiIsPlaying";
import { useJotaiSongName } from "../../jotai/useJotaiSongName";

export const PostPlayer: FC<{
  isActive: boolean;
}> = ({ isActive }) => {
  const { setPlayerIsShow } = useJotaiPlayerIsShow();
  const { togglePlay } = useTogglePlay();
  const { isPlaying } = useJotaiIsPlaying();
  const { artistName } = useJotaiArtistName();
  const { songName } = useJotaiSongName();
  return (
    <HStack
      bg={"gradation.green"}
      borderColor={"white"}
      borderRadius={8}
      borderWidth={isActive ? 2 : 0}
      color={"white"}
      p={2}
    >
      <IconButton
        aria-label={isPlaying ? "停止" : "再生"}
        bg={"none"}
        color={"white"}
        fontSize={"3xl"}
        icon={isPlaying ? <MdPause /> : <MdPlayArrow />}
        onClick={() => {
          setPlayerIsShow(true);
          togglePlay();
        }}
      />
      <Stack>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          {songName}
        </Text>
        <Text fontSize={"xs"}>{artistName}</Text>
      </Stack>
    </HStack>
  );
};
