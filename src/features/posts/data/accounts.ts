type TypeAccount = {
  name: string;
};

export const accountData = {
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

export type TypeAccountId = keyof typeof accountData;
