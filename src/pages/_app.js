import React from "react";
import "styles/global.scss";
import "styles/components/index.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import "util/analytics";
import { AuthProvider } from "util/auth";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <NavbarCustom bg="light" variant="light" expand="md" logo="/logo.png" />
        <Component {...pageProps} />

        <Footer
          bg="light"
          textColor="dark"
          size="small"
          bgImage=""
          bgImageOpacity={1}
          copyright={`© ${new Date().getFullYear()} Career Stories`}
          logo="logo.png"
        />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default MyApp;
