import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Meta from "components/Meta";
import NewStoryModalLauncher from "components/NewStoryModalLauncher";
import StoryCardsSection from "components/StoryCardsSection";

function StoriesPage(props) {
  return (
    <>
      <Meta title="Stories" />
      <Container>
        <Row>
          <NewStoryModalLauncher />
        </Row>
        <Row>
          <StoryCardsSection
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Recent Stories"
            subtitle=""
          />
        </Row>
      </Container>
    </>
  );
}

export default StoriesPage;
