import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-mont`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
