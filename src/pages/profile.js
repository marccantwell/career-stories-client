import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Meta from "components/Meta";
import NewProfile from "components/NewProfile";

function ProfilePage(props) {
  return (
    <>
      <Meta title="Profile" />
      <Container>
        <Row>
          <Col>
            <NewProfile></NewProfile>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
