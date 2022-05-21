import "../styles/globals.css";
import Contexts from "../components/Context";
function MyApp({ Component, pageProps }) {
  return (
    <Contexts>
      {" "}
      <Component {...pageProps} />
      <Contexts />
    </Contexts>
  );
}

export default MyApp;
