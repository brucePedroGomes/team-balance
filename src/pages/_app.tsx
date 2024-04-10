import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { fonts } from "@/libs/fonts";
import { theme } from "@/theme";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.rubik.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <title>Team Balance</title>
      </Head>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}
