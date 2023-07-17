import { TypePost } from "./posts";

export const repliesData: {
  [startTime: number]: Omit<TypePost, "date" | "id" | "replies">[];
} = {
  // はじまりのぴかーん（わー！）
  13726: [
    {
      accountId: "female_10_sumire",
      content: "わー！",
    },
    {
      accountId: "male_50_toshizo",
      content: "わしの頭もぴかーんしてきた",
    },
    {
      accountId: "male_10_yuta",
      content: "わー！",
    },
    {
      accountId: "female_30_tokugawa",
      content: "光ってますね！",
    },
    {
      accountId: "male_40_totonou",
      content: "輝いている⭐️",
    },
    {
      accountId: "male_30_pain",
      content: "何か始まった？",
    },
  ],

  // ひらめきが輝く（かがやく！）
  16784: [
    {
      accountId: "female_10_sumire",
      content: "かがやく！",
    },
    {
      accountId: "female_60_science",
      content: "ひらめいたぞい！！",
    },
    {
      accountId: "male_40_totonou",
      content: "かがやく！！！！",
    },
    {
      accountId: "female_20_mint",
      content: "かがやくよー",
    },
    {
      accountId: "male_10_yuta",
      content: "いいなー",
    },
  ],

  // 未知なるアナログ合成
  19998: [
    {
      accountId: "female_60_science",
      content: "未知なるアナログ合成！\n研究が進んでおるんじゃなー",
    },
    {
      accountId: "female_10_sumire",
      content: "ワクワク",
    },
    {
      accountId: "female_30_tokugawa",
      content: "歴史もロマンがありますよ！",
    },
    {
      accountId: "male_40_totonou",
      content: "これからの時代、アナログ合成が絶対流行りますよねー！",
    },
  ],

  // 電圧ぽわんと響きあって（ぽわん！）
  25954: [
    {
      accountId: "female_20_aomori",
      content: "ぽわん！",
    },
    {
      accountId: "female_10_sumire",
      content: "ぽわん！",
    },
    {
      accountId: "male_30_pain",
      content: "ぽわん！",
    },
    {
      accountId: "female_20_mint",
      content: "ぽわんって響き、なんかかわいいです❤️",
    },
    {
      accountId: "male_40_totonou",
      content: "ぽわん！",
    },
  ],

  // 輪郭は塵芥
  28972: [
    {
      accountId: "female_20_mint",
      content: "消えないでー",
    },
    {
      accountId: "male_40_totonou",
      content: "わかります、諸行無常ですよねー",
    },
    {
      accountId: "female_10_sumire",
      content: "塵芥ってなんですか？",
    },
    {
      accountId: "female_60_science",
      content: "人類みな塵芥（素粒子の集合なので）",
    },
  ],

  // 電気的歌声は
  32229.999999999996: [
    {
      accountId: "male_30_pain",
      content: "歌声にいつも癒されてます！",
    },
    {
      accountId: "female_20_aomori",
      content: "うちのミーちゃんも歌ってます❤️",
      imageName: "1.jpeg",
    },
    {
      accountId: "female_10_sumire",
      content: "らららーー",
    },
  ],

  // 音へと溶ける
  34850: [
    {
      accountId: "female_60_science",
      content: "エントロピーが増大しておる",
    },
    {
      accountId: "female_30_tokugawa",
      content: "過去の歴史も溶けて消えていくのかな。。",
    },
    {
      accountId: "male_10_yuta",
      content: "溶けるーー！",
    },
  ],

  // 目的のない世界に（せかいに）
  38706: [
    {
      accountId: "male_10_yuta",
      content: "せかいにー！",
    },
    {
      accountId: "female_20_mint",
      content: "せかいに！",
    },
    {
      accountId: "female_10_sumire",
      content: "目的ないの悲しい..",
    },
    {
      accountId: "male_40_totonou",
      content: "自分の最近の目的は家族と楽しく暮らすことかなー",
    },
    {
      accountId: "female_30_tokugawa",
      content: "哲学的ですねー",
    },
  ],

  // 色を加える魔法（まほう）
  41996: [],

  // その名はもちろん
  45116: [],

  // わたしです〜！（初音ミク〜！）
  48265: [],

  // 始まるよミュウテイション
  53667: [],

  // 突然変異が偶然（わー！）
  56199: [],

  // 極まるよミュウテイション
  60144: [],

  // 覚醒セラム振動（ワレワレワ〜）
  62684: [],

  // 企てるミュウテイション
  66530: [],

  // 程なく上書き実行（わー！）
  68909: [],

  // この世界は（カワイイ）
  72140: [],

  // 私のもの！
  75276: [],

  // インベイション
  80533: [],

  // 電子の世界からやってきた
  81798: [],

  // 初めの音わたし
  84844: [],

  // イノベイション
  86821: [],

  // 現実の世界にこの歌声を
  88103: [],

  // 響かせるため
  91386: [],

  // 曇りないこの世界に（世界に）
  93120: [],

  // 光を加える魔法（魔法）
  96107: [],

  // その名はもちろん
  99502: [],

  // わたしで〜す！（初音ミク〜！）
  102710: [],

  // 変わりゆくミュウテイション
  109760: [],

  // 突然変異のように（わー！）
  111969: [],

  // 切り替わるミュウテイション
  116056: [],

  // ウェーブテーブルも一考
  118500: [],

  // 裏返るミュウテイション
  122494: [],

  // 程なくランダム実行（むむむ）
  125036: [],

  // この世界は（カワイイ）
  128249: [],

  // 私のもの！
  131329: [],
};
