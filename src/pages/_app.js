import React from "react";
import "styles/global.scss";
import "styles/components/index.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import "util/analytics";
import { AuthProvider } from "util/auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <>
        <NavbarCustom
          bg="white"
          variant="light"
          expand="md"
          logo="https://uploads.divjoy.com/logo.svg"
        />

        <Component {...pageProps} />

        <Footer
          bg="light"
          textColor="dark"
          size="sm"
          bgImage=""
          bgImageOpacity={1}
          copyright={`© ${new Date().getFullYear()} Company`}
          logo="https://uploads.divjoy.com/logo.svg"
        />
      </>
    </AuthProvider>
  );
}

export default MyApp;
