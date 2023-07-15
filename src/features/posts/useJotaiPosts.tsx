import { Stack, Text, useToast } from "@chakra-ui/react";
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
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "2",
    accountId: "2",
    date: new Date(),
    content: "返信です",
    likeAccountIds: [],
    parentPostId: "1",
  },
  {
    id: "3",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "4",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "5",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "6",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "7",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "8",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "9",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "10",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "11",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "12",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "13",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "14",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
]);
postsAtom.debugLabel = "postsAtom";

export const useJotaiPosts = () => {
  const [posts, setPosts] = useAtom(postsAtom);

  const getReplies = (postId: string): TypePost[] =>
    posts.filter(({ parentPostId }) => parentPostId === postId);

  return { posts, setPosts, getReplies };
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
                    likeAccountIds: ["2"],
                  });
                });
                toast({
                  duration: 2000,
                  position: "top",
                  isClosable: true,
                  render: ({ onClose }) => (
                    <Stack
                      as={"a"}
                      bg={
                        "linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))"
                      }
                      borderRadius={8}
                      borderWidth={1}
                      color={"white"}
                      href={`#${targetId}`}
                      onClick={() => {
                        onClose();
                      }}
                      px={2}
                      py={1}
                      spacing={0}
                      w={"full"}
                    >
                      <Text fontSize={"sm"} fontWeight={"bold"}>
                        {accountData["1"].name}
                      </Text>
                      <Text fontSize={"sm"} fontWeight={"bold"}>
                        {unit.text}
                      </Text>
                    </Stack>
                  ),
                });

                const targetRepliesDatum = repliesData[unit.startTime] ?? [];
                targetRepliesDatum.forEach((reply) => {
                  setTimeout(() => {
                    setPosts((draft) => {
                      const targetPost = draft.find(
                        ({ id }) => id === targetId
                      );
                      if (!targetPost) return;
                      draft.push({
                        ...reply,
                        id: Date.now().toString(),
                        date: new Date(),
                        parentPostId: targetPost.id,
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
