import { FC } from "react";
import { Hooks } from "./Hooks";
import { Layout } from "./layout/Layout";

/** @package */
export const App: FC = () => {
  return (
    <>
      <Layout>テスト</Layout>
      <Hooks />
    </>
  );
};
