import { Text } from "@chakra-ui/react";
import {
  differenceInMinutes,
  differenceInSeconds,
  format,
  isSameDay,
  isSameHour,
} from "date-fns";
import { FC, useEffect } from "react";
import { useUpdate } from "react-use";

const formatDate = (date: Date): string => {
  const now = new Date();
  if (differenceInSeconds(now, date) < 60) {
    return "たった今";
  } else if (isSameHour(now, date)) {
    return `${differenceInMinutes(now, date)}分前`;
  } else if (isSameDay(now, date)) {
    return format(date, "HH:mm");
  } else {
    return format(date, "M/dd");
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
