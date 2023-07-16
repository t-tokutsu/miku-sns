type TypeAccount = {
  name: string;
  description: string;
};

export const accountData = {
  miku: {
    name: "初音ミク",
    description: "私はマルマル",
  },
  you: {
    name: "あなた",
    description: "私はマルマル",
  },
  "1": {
    name: "Alice",
    description: "私はマルマル",
  },
  "2": {
    name: "Bob",
    description: "私はマルマル",
  },
  "3": {
    name: "Carol",
    description: "私はマルマル",
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
