import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors.ts";
import { components } from "./components/index.ts";
import { config } from "./config.ts";
import { fonts } from "./fonts.ts";
import { styles } from "./styles.ts";
import { textStyles } from "./textStyles.js";

export const chakraTheme = extendTheme({
  config,
  colors,
  components,
  textStyles,
  styles,
  fonts,
});

// `chakra:theme-typings`タスクの実行のためにdefaultでもexportする
export default chakraTheme;
