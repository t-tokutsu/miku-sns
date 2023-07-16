import { subHours } from "date-fns";
import { v4 } from "uuid";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content">[] = [
  {
    content: "今日の練習疲れたーー！\n監督厳しすぎw",
  },
  {
    content: "あー、数学の宿題やってない。。\n吉田に写させてもらお",
  },
  {
    content: "明日朝練あるの忘れてた",
  },
  {
    content: "今日試合やったー。相手の8番、1年のくせに身長高すぎやろw",
  },
];

export const male_10_yuta: TypePost[] = postsArray.map(
  ({ content }, index) => ({
    id: v4(),
    accountId: "male_10_yuta",
    date: subHours(new Date(), (index + 1) * 10),
    content,
  })
);
