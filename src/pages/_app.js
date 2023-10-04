import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { store } from "@/Redux/store";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}
