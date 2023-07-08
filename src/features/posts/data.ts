type TypeAccount = {
  name: string;
};

export const accountData: {
  [id: string]: TypeAccount;
} = {};

type TypeBasicPost = {
  id: string;
  accountId: string;
  date: Date;
  content: string;
  images: {
    src: string;
  }[];
  likes: {
    accountId: string;
  }[];
};

type TypePostDatum = TypeBasicPost & {
  replies: TypeBasicPost[];
};

export const postsData: TypePostDatum[] = [];
