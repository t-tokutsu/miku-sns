import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { FC } from "react";
import { useJotaiDuration } from "../../jotai/useJotaiDuration";
import { useJotaiPlayer } from "../../jotai/useJotaiPlayer";
import { useJotaiPosition } from "../../jotai/useJotaiPosition";

/** @package */
export const MusicSlider: FC = () => {
  const { player } = useJotaiPlayer();
  const { duration } = useJotaiDuration();
  const { position } = useJotaiPosition();

  return (
    <Slider
      max={duration}
      onChange={(value) => {
        player?.requestMediaSeek(value);
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      value={position}
    >
      <SliderTrack bg={"whiteAlpha.400"}>
        <SliderFilledTrack bg={"white"} />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
