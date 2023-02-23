import '../public/css/style.css'
import '../public/css/animate.min.css'
import '../public/css/fontawesome-all.min.css'
import '../public/css/meanmenu.css'
import '../public/css/responsive.css'
import "../styles/globals.css";

import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
