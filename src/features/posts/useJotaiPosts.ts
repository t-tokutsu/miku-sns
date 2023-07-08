import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { usePlayerListener } from "../player/hooks/usePlayerListener";
import { useJotaiPlayer } from "../player/jotai/useJotaiPlayer";
import { TypePostDatum } from "./data";

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
              setPosts((draft) => {
                draft.unshift({
                  id: Date.now().toString(),
                  content: unit.text,
                  date: new Date(),
                  accountId: "1",
                  images: [],
                  likes: [],
                  replies: [],
                });
              });
              console.log(unit.text);
            }
          }
        };
        phrase = phrase.next;
      }
    },
  });
};
