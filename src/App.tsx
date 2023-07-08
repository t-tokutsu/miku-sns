import { FC } from "react";
import { Posts } from "./features/posts";
import { Layout } from "./layout/Layout";

/** @package */
export const App: FC = () => {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
};
