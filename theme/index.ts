import {
  createTheme,
  typographyTheme
} from "anolis-ui";

export const theme = createTheme({
  ...typographyTheme({
    baseStyle: {
      _h1: {
        fontSize: { _: "2.125rem", sm: "3.75rem" },
        lineHeight: { _: "2.375rem", sm: "3.75rem" },
      },
    }
  }),
});
