import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import queryClient from "~/query/queryClient";
import store from "../redux/store";
import "../styles/globalStyles.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ReactQueryDevtools/>
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
