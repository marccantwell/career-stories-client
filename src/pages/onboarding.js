import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Meta from "components/Meta";
import NewStoryModalLauncher from "components/NewStoryModalLauncher";
import StoryCardsSection from "components/StoryCardsSection";
import { Button, Col } from "react-bootstrap";

function OnboardingPage(props) {
  return (
    <>
      <Meta title="Onboarding" />
      <Container>
        <Row>
          <Col>
            <div>
              <h3>Just for you.</h3>
              <Button href="/profile">Setup your profile.</Button>
            </div>
          </Col>
          <Col>
            <div>
              <h3>For your team or organization.</h3>
              <Button href="/settings/general">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OnboardingPage;
