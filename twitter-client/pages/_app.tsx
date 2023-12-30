import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
const inter = Inter({ subsets: ["latin"] });
import { Google_clientID } from "../constant";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId={Google_clientID}>
        <Component {...pageProps} />{" "}
      </GoogleOAuthProvider>
    </div>
  );
}
