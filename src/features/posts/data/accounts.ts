type TypeAccount = {
  name: string;
};

export const accountData = {
  miku: {
    name: "初音ミク",
  },
  you: {
    name: "あなた",
  },
  "1": {
    name: "Alice",
  },
  "2": {
    name: "Bob",
  },
  "3": {
    name: "Carol",
  },
} as const satisfies {
  [id: string]: TypeAccount;
};

export const myAccountId: TypeAccountId = "you";
export const mikuAccountId: TypeAccountId = "miku";

export type TypeAccountId = keyof typeof accountData;

export const accountIds: TypeAccountId[] = Object.keys(
  accountData
) as TypeAccountId[];
