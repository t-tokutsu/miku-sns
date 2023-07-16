import {
  Box,
  Collapse,
  HStack,
  IconButton,
  Slide,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { MdPlayArrow, MdPause } from "react-icons/md";
import { useJotaiArtistName } from "../../jotai/useJotaiArtistName";
import { useJotaiIsPlaying } from "../../jotai/useJotaiIsPlaying";
import { useJotaiSongName } from "../../jotai/useJotaiSongName";
import { useTogglePlay } from "./hooks/useTogglePlay";
import { useJotaiPlayerIsShow } from "./jotai/useJotaiPlayerIsShow";
import { MusicSlider } from "./MusicSlider";

export const Player: FC = () => {
  const { playerIsShow } = useJotaiPlayerIsShow();
  const { togglePlay } = useTogglePlay();
  const { isPlaying } = useJotaiIsPlaying();
  const { artistName } = useJotaiArtistName();
  const { songName } = useJotaiSongName();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Slide direction={"bottom"} in={playerIsShow}>
        <Stack
          bg={
            "linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))"
          }
          borderRadius={8}
          m={2}
          p={1}
          spacing={0}
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
            <Collapse in={isOpen} startingHeight={20}>
              <HStack
                as={"button"}
                color={"white"}
                onClick={() => setIsOpen((prev) => !prev)}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
              >
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  {songName}
                </Text>
                <Text fontSize={"xs"}>{artistName}</Text>
              </HStack>
            </Collapse>
          </HStack>
          <Collapse animateOpacity in={isOpen}>
            <Box px={4} py={2}>
              <MusicSlider />
            </Box>
          </Collapse>
        </Stack>
      </Slide>
      <Spacer h={"64px"} />
    </>
  );
};
