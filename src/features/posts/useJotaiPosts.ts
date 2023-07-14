import { useToast } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { getRandomNumber } from "../../functions/getRandomNumber";
import { usePlayerListener } from "../player/hooks/usePlayerListener";
import { useJotaiPlayer } from "../player/jotai/useJotaiPlayer";
import { accountData } from "./data/accounts";
import { TypePost } from "./data/posts";
import { repliesData } from "./data/replies";

const postsAtom = atomWithImmer<TypePost[]>([
  {
    id: "1",
    accountId: "1",
    date: new Date(),
    content: "Hello, world!",
    images: [],
    likes: [],
    replies: [
      {
        id: "2",
        accountId: "2",
        date: new Date(),
        content: "Hello, Alice!",
        images: [],
        likes: [],
        replies: [],
      },
    ],
  },
]);
postsAtom.debugLabel = "postsAtom";

export const useJotaiPosts = () => {
  const [posts, setPosts] = useAtom(postsAtom);
  return { posts, setPosts };
};

export const useUpdateJotaiPosts = () => {
  const { player } = useJotaiPlayer();
  const { setPosts } = useJotaiPosts();
  const toast = useToast();

  usePlayerListener({
    onVideoReady: () => {
      let phrase = player?.video.firstPhrase;
      let lastPhraseStartTime: number;

      while (phrase) {
        phrase.animate = (now, unit) => {
          if (unit.contains(now)) {
            if (lastPhraseStartTime !== unit.startTime) {
              lastPhraseStartTime = unit.startTime;
              console.log("unit.startTime", unit.startTime);
              console.log("unit.text", unit.text);
              const targetId = `${unit.startTime}_${Date.now()}`;
              setTimeout(() => {
                setPosts((draft) => {
                  draft.unshift({
                    id: targetId,
                    content: unit.text,
                    date: new Date(),
                    accountId: "1",
                    images: [],
                    likes: [
                      {
                        accountId: "2",
                      },
                    ],
                    replies: [],
                  });
                });
                toast({
                  title: accountData["1"].name,
                  description: unit.text,
                  status: "info",
                  duration: 4000,
                  variant: "subtle",
                  position: "bottom-right",
                  isClosable: true,
                });

                const targetRepliesDatum = repliesData[unit.startTime] ?? [];
                targetRepliesDatum.forEach((reply) => {
                  setTimeout(() => {
                    setPosts((draft) => {
                      const targetPost = draft.find(
                        ({ id }) => id === targetId
                      );
                      targetPost?.replies.push({
                        ...reply,
                        id: Date.now().toString(),
                        date: new Date(),
                        replies: [],
                      });
                    });
                  }, getRandomNumber(1000, 5000));
                });
              }, 200);
            }
          }
        };
        phrase = phrase.next;
      }
    },
  });
};
