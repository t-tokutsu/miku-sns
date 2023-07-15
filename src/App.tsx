import { FC } from "react";
import { Posts } from "./features/posts";
import { Layout } from "./layout";

/** @package */
export const App: FC = () => {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
};
