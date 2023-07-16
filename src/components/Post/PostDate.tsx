import { Text } from "@chakra-ui/react";
import { differenceInSeconds, format } from "date-fns";
import { FC, useEffect } from "react";
import { useUpdate } from "react-use";

const formatDate = (date: Date): string => {
  const differenceSeconds = differenceInSeconds(new Date(), date);
  if (differenceSeconds < 60) {
    return "たった今";
  } else if (differenceSeconds < 60 * 60) {
    return `${Math.floor(differenceSeconds / 60)}分前`;
  } else {
    return format(date, "M/dd H:mm");
  }
};

export const PostDate: FC<{
  date: Date;
}> = ({ date }) => {
  const update = useUpdate();
  useEffect(() => {
    const interval = setInterval(() => {
      update();
    }, 5 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [update]);

  return <Text fontSize={"sm"}>{formatDate(date)}</Text>;
};
