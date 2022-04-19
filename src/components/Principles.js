import React from "react";
import ClientOnly from "../components/ClientOnly";
import PrinciplesSection from "components/PrinciplesSection";

function Principles(props) {
  return (
    <ClientOnly>
      <PrinciplesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Principles"
        subtitle="What your company values"
      />
    </ClientOnly>
  );
}

export default Principles;
