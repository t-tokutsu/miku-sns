import { Avatar, HStack, Text, useToast } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { getRandomNumber } from "../../functions/getRandomNumber";
import { useJotaiPlayer } from "../../jotai/useJotaiPlayer";
import { useJotaiAccountId } from "../account/useJotaiAccountId";
import { usePlayerListener } from "../player/hooks/usePlayerListener";
import { useJotaiParentPostId } from "../replies/useJotaiParentId";
import { accountIds, mikuAccountId, myAccountId } from "./data/accounts";
import { TypePost, postsData } from "./data/posts";
import { repliesData } from "./data/replies";

const postsAtom = atomWithImmer<TypePost[]>(postsData);
postsAtom.debugLabel = "postsAtom";

export const useJotaiPosts = () => {
  const [posts, setPosts] = useAtom(postsAtom);

  const getReplies = (postId: string): TypePost[] =>
    posts.filter(({ parentPostId }) => parentPostId === postId);

  const setPostWithLike = (
    props: Parameters<typeof setPosts>[0],
    targetId: string
  ) => {
    setPosts(props);
    accountIds.forEach((accountId) => {
      if (accountId === myAccountId) return;
      if (Math.random() < 0.8) {
        setTimeout(() => {
          setPosts((draft) => {
            const targetPost = draft.find(({ id }) => id === targetId);
            if (!targetPost) return;
            targetPost.likeAccountIds = [
              ...(targetPost.likeAccountIds ?? []),
              accountId,
            ];
          });
        }, getRandomNumber(300, 5000));
      }
    });
  };

  return { posts, setPosts, setPostWithLike, getReplies };
};

export const useUpdateJotaiPosts = () => {
  const { player } = useJotaiPlayer();
  const { setPosts } = useJotaiPosts();
  const { setParentPostId } = useJotaiParentPostId();
  const { setAccountId } = useJotaiAccountId();
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
              const targetId = `${unit.startTime}_${Date.now()}`;

              // 投稿の追加
              setPosts((draft) => {
                draft.unshift({
                  id: targetId,
                  content: unit.text,
                  date: new Date(),
                  accountId: mikuAccountId,
                });
              });

              // いいねの追加
              accountIds.forEach((accountId) => {
                if (accountId === myAccountId) return;
                if (Math.random() < 0.8) {
                  setTimeout(() => {
                    setPosts((draft) => {
                      const targetPost = draft.find(
                        ({ id }) => id === targetId
                      );
                      if (!targetPost) return;
                      targetPost.likeAccountIds = [
                        ...(targetPost.likeAccountIds ?? []),
                        accountId,
                      ];
                    });
                  }, getRandomNumber(300, 5000));
                }
              });

              // 通知の追加
              toast({
                duration: 2000,
                position: "top",
                isClosable: true,
                render: ({ onClose }) => (
                  <HStack
                    as={"button"}
                    bg={"gradation.green"}
                    borderRadius={"full"}
                    borderWidth={1}
                    color={"white"}
                    onClick={() => {
                      setParentPostId(targetId);
                      setAccountId(undefined);
                      onClose();
                    }}
                    p={1}
                    w={"full"}
                  >
                    <Avatar
                      bg={"gradation.green"}
                      size={"xs"}
                      src={`./images/accounts/${mikuAccountId}/icon.jpg`}
                    />
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                      {unit.text}
                    </Text>
                  </HStack>
                ),
              });

              // 返信の追加
              const targetRepliesDatum = repliesData[unit.startTime] ?? [];
              targetRepliesDatum.forEach((reply) => {
                setTimeout(() => {
                  setPosts((draft) => {
                    const targetPost = draft.find(({ id }) => id === targetId);
                    if (!targetPost) return;
                    draft.push({
                      ...reply,
                      id: Date.now().toString(),
                      date: new Date(),
                      parentPostId: targetPost.id,
                    });
                  });
                }, getRandomNumber(300, 5000));
              });
            }
          }
        };
        phrase = phrase.next;
      }
    },
  });
};
