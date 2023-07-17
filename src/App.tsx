import { FC } from "react";
import { Account } from "./features/account";
import { Posts } from "./features/posts";
import { Replies } from "./features/replies";
import { Hooks } from "./Hooks";
import { Layout } from "./layout";

/** @package */
export const App: FC = () => {
  return (
    <>
      <Layout>
        <Posts />
        <Account />
        <Replies />
      </Layout>
      <Hooks />
    </>
  );
};
