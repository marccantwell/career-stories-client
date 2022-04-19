import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import AspectRatio from "components/AspectRatio";
import { useQuery, gql } from "@apollo/client";
import { useAuth } from "util/auth";

const QUERY = gql`
  query OrgPrinciples($organizationId: Int!) {
    orgPrinciples(organizationId: $organizationId) {
      name
      description
      id
    }
  }
`;

function PrinciplesSection(props) {
  const auth = useAuth();
  const organizationId = 1;
  const { data, loading, error } = useQuery(QUERY, {
    variables: { organizationId },
  });

  if (loading) {
    return <h2>loading</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }
  const principles = data.orgPrinciples;

  return (
    <Card>
      <Row className="no-gutters overflow-hidden">
        {" "}
        {principles.map((principle, index) => (
          <Col
            xs={12}
            lg={6}
            style={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              boxShadow: "1px 1px 0 0 #efefef",
            }}
            key={index}
          >
            <div className="PrinciplesSection__item has-text-centered">
              <div className="PrinciplesSection__image-container">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src="https://via.placeholder.com/150"
                    alt={principle.name}
                    fluid={true}
                  />{" "}
                </AspectRatio>{" "}
              </div>{" "}
              <h4> {principle.name} </h4> <p> {principle.description} </p>{" "}
            </div>{" "}
          </Col>
        ))}{" "}
      </Row>{" "}
    </Card>
  );
}

export default PrinciplesSection;
