import { Provider } from "react-redux";
import store from "../app/store";
import "../styles/_app.scss";

const MyApp = ({Component, pageProps})=>{
    return  <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
}

export default MyApp;