import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useRouter } from "next/router";
import Meta from "components/Meta";
import AdminSection from "components/AdminSection";

function AdminPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Admin" />
      <Container>
        <Row>
          <AdminSection
            bg="white"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            section={router.query.section}
            key={router.query.section}
          />
        </Row>
      </Container>
    </>
  );
}

export default AdminPage;
