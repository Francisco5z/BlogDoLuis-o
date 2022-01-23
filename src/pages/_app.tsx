import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { darkTheme } from "../styles/theme/dark";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
