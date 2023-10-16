import "../styles/globals.css";
import  CafeProvider  from "../../context/CafeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <CafeProvider>
      <Component {...pageProps} />
    </CafeProvider>
  );
}

export default MyApp;