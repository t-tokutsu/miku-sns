import { TypeBasicPost } from "./posts";

export const repliesData: {
  [startTime: number]: Omit<TypeBasicPost, "date" | "id">[];
} = {
  13726: [
    {
      accountId: "2",
      content: "さすがです！",
      likes: [],
    },
    {
      accountId: "2",
      content: "すごーい！",
      likes: [],
    },
  ],
};
