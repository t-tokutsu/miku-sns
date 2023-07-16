import { FC } from "react";
import { Account } from "./features/account";
import { useJotaiAccountId } from "./features/account/useJotaiAccountId";
import { Posts } from "./features/posts";
import { Layout } from "./layout";

/** @package */
export const App: FC = () => {
  const { accountId } = useJotaiAccountId();
  return <Layout>{accountId ? <Account /> : <Posts />}</Layout>;
};
