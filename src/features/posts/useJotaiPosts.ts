import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { getRandomNumber } from "../../functions/getRandomNumber";
import { usePlayerListener } from "../player/hooks/usePlayerListener";
import { useJotaiPlayer } from "../player/jotai/useJotaiPlayer";
import { TypePostDatum } from "./data/posts";
import { repliesData } from "./data/replies";

const postsAtom = atomWithImmer<TypePostDatum[]>([
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
              const targetRepliesDatum = repliesData[unit.startTime] ?? [];
              targetRepliesDatum.forEach((reply) => {
                setTimeout(() => {
                  setPosts((draft) => {
                    const targetPost = draft.find(({ id }) => id === targetId);
                    targetPost?.replies.push({
                      ...reply,
                      id: Date.now().toString(),
                      date: new Date(),
                    });
                  });
                }, getRandomNumber(1000, 5000));
              });
            }
          }
        };
        phrase = phrase.next;
      }
    },
  });
};
