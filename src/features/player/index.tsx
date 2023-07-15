import {
  Box,
  Collapse,
  HStack,
  IconButton,
  Link,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Stack
        bg={
          "linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))"
        }
        borderRadius={8}
        p={1}
        spacing={0}
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
          <Collapse in={isOpen} startingHeight={20}>
            <Link
              color={"white"}
              css={
                isOpen
                  ? undefined
                  : {
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      display: "-webkit-box",
                    }
              }
              onClick={() => setIsOpen((prev) => !prev)}
              overflow={"hidden"}
            >
              <Text fontSize={"sm"} fontWeight={"bold"}>
                {songName}
              </Text>
              <Text fontSize={"xs"}>{artistName}</Text>
            </Link>
          </Collapse>
        </HStack>
        <Collapse animateOpacity in={isOpen}>
          <Box p={4}>
            <MusicSlider />
          </Box>
        </Collapse>
      </Stack>
      <Hooks />
    </>
  );
};
