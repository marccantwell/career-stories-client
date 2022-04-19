import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Avatar from "components/Avatar";

function UserBiosSection(props) {
  const users = props.users;

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {users.map((user, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="py-3 d-flex align-items-stretch"
              key={index}
            >
              <Card>
                <Card.Body className="d-flex flex-column text-center align-items-center p-4">
                  <Avatar src={user.avatar} alt={user.name} size="128px" />
                  <h6 className="font-weight-bold mb-0 mt-4">
                    {user.firstName}
                  </h6>
                  <small>{user.lastName}</small>
                  <Card.Text className="mt-4"></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default UserBiosSection;
