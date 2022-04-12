import React from "react";
import Container from "react-bootstrap/Container";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import AspectRatio from "components/AspectRatio";

function StoryCardsSection(props) {
  const principles = [
    {
      name: "Integrity"
    },
    {
      name: "Hire and Develop the best"
    },
    {
      name: "Inclusion"
    }
  ];
  const stories = [
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/golden-gate"
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/beach"
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/road"
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/ballons"
    }
  ];

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
        <ToggleButtonGroup type="checkbox" name="options" defaultValue={1}>
          {principles.map((principle, index) => (
            <ToggleButton value={1}>{principle.name}</ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Row className="justify-content-center">
          {stories.map((story, index) => (
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
              <Link href={story.url} passHref={true}>
                <Card as="a" text="dark" className="text-decoration-none">
                  <AspectRatio ratio={1 / 0.75}>
                    <Card.Img
                      src={story.image}
                      alt={story.title}
                      variant="top"
                    />
                  </AspectRatio>
                  <Card.Body>
                    <Card.Title>{story.title}</Card.Title>
                    <Card.Text>{story.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default StoryCardsSection;
