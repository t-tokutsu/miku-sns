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
  41996: [
    {
      accountId: "female_10_sumire",
      content: "まほう！\nわくわくします！！",
    },
    {
      accountId: "male_50_toshizo",
      content: "わしも音楽の魔法にかけられたぞい",
    },
    {
      accountId: "female_20_aomori",
      content:
        "あたしも魔法が使えたら、満員電車乗らずに空飛んで出勤するのになー",
    },
    {
      accountId: "male_10_yuta",
      content: "どんな色がつくのかなー",
    },
  ],

  // その名はもちろん
  45116: [
    {
      accountId: "male_30_pain",
      content: "もちろん...？",
    },
    {
      accountId: "female_20_mint",
      content: "もちろんですよねー",
    },
    {
      accountId: "female_10_sumire",
      content: "いったい誰ー？",
    },
  ],

  // わたしです〜！（初音ミク〜！）
  48265: [
    {
      accountId: "female_10_sumire",
      content: "ミクちゃんだった！！",
    },
    {
      accountId: "male_10_yuta",
      content: "初音ミク〜！",
    },
    {
      accountId: "female_20_mint",
      content: "初音ミク〜〜〜！",
    },
    {
      accountId: "female_30_tokugawa",
      content: "きたー！",
    },
    {
      accountId: "female_20_aomori",
      content: "やったぜ",
    },
  ],

  // 始まるよミュウテイション
  53667: [
    {
      accountId: "male_40_totonou",
      content: "人生にもMutationが必要ですよね！",
    },
    {
      accountId: "male_10_yuta",
      content: "ミュウテイションってなにー？",
    },
    {
      accountId: "female_20_mint",
      content: "はじまるはじまる！",
    },
    {
      accountId: "male_50_toshizo",
      content: "はじまったな",
    },
  ],

  // 突然変異が偶然（わー！）
  56199: [
    {
      accountId: "male_40_totonou",
      content:
        "突然変異が偶然に起こることで、進化の鍵が見つかるかもしれませんね。興味深い研究ですね！",
    },
    {
      accountId: "male_10_yuta",
      content: "突然変異って面白いなー",
    },
    {
      accountId: "female_10_sumire",
      content: "わー！",
    },
    {
      accountId: "female_20_mint",
      content: "ワワワーワ・ワーワワ",
    },
    {
      accountId: "female_30_tokugawa",
      content: "突然変異でどうなっちゃうんだろう？",
    },
  ],

  // 極まるよミュウテイション
  60144: [
    {
      accountId: "male_30_pain",
      content: "極まってきた",
    },
    {
      accountId: "male_50_toshizo",
      content: "うおー、テンション上がってきたぞい",
    },
    {
      accountId: "female_10_sumire",
      content: "ミュウテイション、明日学校で自慢しよー",
    },
    {
      accountId: "female_20_aomori",
      content: "わたしもそろそろ極まりつつあるかも",
    },
  ],

  // 覚醒セラム振動（ワレワレワ〜）
  62684: [
    {
      accountId: "female_10_sumire",
      content: "ワレワレワ〜！！",
    },
    {
      accountId: "male_40_totonou",
      content: "ワレワレワ〜",
    },
    {
      accountId: "male_50_toshizo",
      content: "最近手が震える",
    },
    {
      accountId: "female_20_mint",
      content: "ブルブルぶる",
    },
  ],

  // 企てるミュウテイション
  66530: [
    {
      accountId: "male_40_totonou",
      content: "僕も面白いこと企画中です！\n今度一緒に面白いことやりましょうw",
    },
    {
      accountId: "female_60_science",
      content: "初音ミクはどんどん進化するのー",
    },
    {
      accountId: "male_10_yuta",
      content: "くわだてるって読むのか",
    },
    {
      accountId: "female_20_mint",
      content: "どんなミュウテイションなんだろう！",
    },
  ],

  // 程なく上書き実行（わー！）
  68909: [
    {
      accountId: "male_10_yuta",
      content: "やっちゃえ！！",
    },
    {
      accountId: "female_20_mint",
      content: "わー！！",
    },
    {
      accountId: "male_30_pain",
      content: "わー！",
    },
    {
      accountId: "male_40_totonou",
      content: "プログラムが誤って上書きされてしまった苦い過去が蘇る",
    },
  ],

  // この世界は（カワイイ）
  72140: [
    {
      accountId: "female_10_sumire",
      content: "カワイイ",
    },
    {
      accountId: "male_30_pain",
      content: "可愛すぎです！！",
    },
    {
      accountId: "female_60_science",
      content: "かわーーいいー",
    },
    {
      accountId: "female_30_tokugawa",
      content: "ザ・ワールド！（俺が時を止めた）",
    },
  ],

  // 私のもの！
  75276: [
    {
      accountId: "female_20_aomori",
      content: "（朗報）この世界、ミクのものだった",
    },
    {
      accountId: "male_10_yuta",
      content: "俺のものでもあるよ！",
    },
    {
      accountId: "female_10_sumire",
      content: "そうだそうだ！",
    },
  ],

  // インベイション
  80533: [
    {
      accountId: "male_10_yuta",
      content: "2番！",
    },
    {
      accountId: "female_10_sumire",
      content: "インベイションって初めて聞きました！学校でも習ったことない！",
    },
    {
      accountId: "female_60_science",
      content: "昔は喫茶店にインベーダーゲームがあったのう",
    },
    {
      accountId: "male_30_pain",
      content:
        "コンサルが使う横文字は苦手なのに、ミクちゃんが使うとかっこいいです！",
    },
    {
      accountId: "female_30_tokugawa",
      content: "英語むずかしー",
    },
  ],

  // 電子の世界からやってきた
  81798: [
    {
      accountId: "female_60_science",
      content:
        "電子の世界に行って素粒子を観察してみたいわい。クォーク、レプトン、グルーオン。スピンスピンスピン",
    },
    {
      accountId: "female_10_sumire",
      content: "電子ってなにー？電気のことかな",
    },
    {
      accountId: "male_50_toshizo",
      content: "電子音楽の誕生は音楽史のターニングポイントじゃな",
    },
    {
      accountId: "male_10_yuta",
      content: "電子の世界に行ったら特殊能力とか使えるのかなー",
    },
  ],

  // 初めの音わたし
  84844: [
    {
      accountId: "female_30_tokugawa",
      content: "初音ミク！",
    },
    {
      accountId: "male_40_totonou",
      content:
        "やはりビジネスは先行者有利でファーストペンギンになってブルーオーシャンを開拓するべきだよなー",
    },
    {
      accountId: "female_20_mint",
      content: "もはや大御所感が出てきた",
    },
  ],

  // イノベイション
  86821: [
    {
      accountId: "male_50_toshizo",
      content: "初音ミクの誕生はまさにイノベイション！",
    },
    {
      accountId: "male_40_totonou",
      content: "世界はまだまだイノベイションで溢れている",
    },
    {
      accountId: "female_20_aomori",
      content: "うちの上司も「イノベイションを起こせ！」ってめっちゃ言ってくる",
    },
    {
      accountId: "female_60_science",
      content: "これが科学の力じゃ",
    },
  ],

  // 現実の世界にこの歌声を
  88103: [
    {
      accountId: "female_20_mint",
      content: "いつもありがとうー！",
    },
    {
      accountId: "male_30_pain",
      content: "歌声サイコー",
    },
    {
      accountId: "male_50_toshizo",
      content: "マジで神バイブス爆上げじゃぞい",
    },
  ],

  // 響かせるため
  91386: [
    {
      accountId: "female_10_sumire",
      content: "聞こえてるよー！",
    },
    {
      accountId: "female_60_science",
      content: "回析は波が持つ重要な特徴の一つじゃ",
    },
    {
      accountId: "male_10_yuta",
      content: "毎日鬼リピしてるー",
    },
    {
      accountId: "female_20_mint",
      content: "うちのゼミでもみんな聴いてる",
    },
  ],

  // 曇りないこの世界に（世界に）
  93120: [
    {
      accountId: "female_60_science",
      content: "曇りない世界になってほしいのう",
    },
    {
      accountId: "female_20_mint",
      content: "世界に！",
    },
    {
      accountId: "male_40_totonou",
      content: "曇りない！！",
    },
  ],

  // 光を加える魔法（魔法）
  96107: [
    {
      accountId: "female_10_sumire",
      content: "魔法、使ってみたい！！",
    },
    {
      accountId: "female_20_aomori",
      content: "お肌はテカって欲しくないー😫",
    },
    {
      accountId: "female_60_science",
      content: "光は「波と粒子の両方の性質を併せ持つ♣♥」んじゃ",
    },
    {
      accountId: "male_10_yuta",
      content: "輝いてるよー！",
    },
  ],

  // その名はもちろん
  99502: [
    {
      accountId: "male_30_pain",
      content: "もちろん...？（2回目）",
    },
    {
      accountId: "female_30_tokugawa",
      content: "もはやお馴染み！",
    },
    {
      accountId: "male_50_toshizo",
      content: "誰なんじゃー",
    },
  ],

  // わたしで〜す！（初音ミク〜！）
  102710: [
    {
      accountId: "female_10_sumire",
      content: "やっぱり！！",
    },
    {
      accountId: "male_10_yuta",
      content: "やった〜！",
    },
    {
      accountId: "female_30_tokugawa",
      content: "初音ミク〜〜〜！",
    },
    {
      accountId: "male_30_pain",
      content: "きたー！",
    },
  ],

  // 変わりゆくミュウテイション
  109760: [
    {
      accountId: "female_30_tokugawa",
      content: "この移ろいゆく世界で唯一変わらないもの、それがダム",
    },
    {
      accountId: "male_50_toshizo",
      content: "生涯現役！",
    },
    {
      accountId: "female_10_sumire",
      content: "ミュウテイション！！",
    },
    {
      accountId: "male_40_totonou",
      content: "開発だとイミュータブルの方がありがたい",
    },
  ],

  // 突然変異のように（わー！）
  111969: [
    {
      accountId: "female_30_tokugawa",
      content: "わー！",
    },
    {
      accountId: "female_30_tokugawa",
      content: "ワーテルローの戦い（1815年6月）",
    },
    {
      accountId: "male_10_yuta",
      content: "突然変異してみたい！",
    },
  ],

  // 切り替わるミュウテイション
  116056: [
    {
      accountId: "male_30_pain",
      content: "今日仕事でミスしちゃったけど、切り替えよう",
    },
    {
      accountId: "male_50_toshizo",
      content: "切り替わってきた",
    },
    {
      accountId: "female_20_mint",
      content: "チョコミントアイスを歯磨き粉味と言った奴は許さない",
    },
  ],

  // ウェーブテーブルも一考
  118500: [
    {
      accountId: "male_50_toshizo",
      content: "PPG Wave、懐かしいのー",
    },
    {
      accountId: "male_40_totonou",
      content: "悩みますー",
    },
    {
      accountId: "female_10_sumire",
      content: "うちのテーブルももっとオシャレなやつに変えてほしいなー",
    },
    {
      accountId: "female_60_science",
      content:
        "基本波形にはサイン波、三角波、ノコギリ波等などがあるんじゃ。\nフーリエ変換すると綺麗な分布になるぞい",
    },
  ],

  // 裏返るミュウテイション
  122494: [
    {
      accountId: "male_30_pain",
      content:
        "今日プレゼンで声が裏返りました。これもミュウテイションと言えなくもないですね（？）",
    },
    {
      accountId: "female_10_sumire",
      content: "ペットのカメはよく裏返ってます。自力で起き上がれないんだよねー",
    },
    {
      accountId: "male_50_toshizo",
      content: "陰と陽、善と悪は表裏一体なのじゃ",
    },
    {
      accountId: "female_30_tokugawa",
      content: "わたしも裏返りたーい",
    },
  ],

  // 程なくランダム実行（むむむ）
  125036: [
    {
      accountId: "female_20_aomori",
      content: "なにむ！",
    },
    {
      accountId: "male_30_pain",
      content: "むむむー",
    },
    {
      accountId: "male_40_totonou",
      content: "時には時間をかけて悩むのも大事ですよね！",
    },
    {
      accountId: "female_60_science",
      content: "ランダムネスは意外と奥が深いのじゃ",
    },
  ],

  // この世界は（カワイイ）
  128249: [
    {
      accountId: "male_10_yuta",
      content: "かわいい（かわいい）",
    },
    {
      accountId: "male_30_pain",
      content: "この世界にいる僕も実はかわいかった...？",
    },
    {
      accountId: "female_60_science",
      content: "その通りじゃ",
    },
    {
      accountId: "female_20_aomori",
      content: "うちの猫もかわいい",
    },
  ],

  // 私のもの！
  131329: [
    {
      accountId: "female_30_tokugawa",
      content: "なんと！",
    },
    {
      accountId: "male_30_pain",
      content: "わかる",
    },
    {
      accountId: "male_40_totonou",
      content: "その通りです！",
    },
  ],
};
