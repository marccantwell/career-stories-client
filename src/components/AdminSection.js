import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import AdminOrg from "components/AdminOrg";
import AdminUsers from "components/AdminUsers";
import Principles from "components/Principles";
import { Breadcrumb, Row } from "react-bootstrap";

function AdminSection(props) {
  const validSections = {
    org: true,
    users: true,
    principles: true,
  };

  const section = validSections[props.section] ? props.section : "users";

  const data = {
    domain: "company.com",
    companyName: "Company",
  };

  return (
    <>
      <Col lg={3}>
        <Nav variant="pills" activeKey={section} className="flex-column">
          <Nav.Item>
            <Link href="/admin/org" passHref={true}>
              <Nav.Link eventKey="org">Organization Details</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/admin/users" passHref={true}>
              <Nav.Link eventKey="users">Users</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/admin/principles" passHref={true}>
              <Nav.Link eventKey="principles">Principles</Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col>
        <Row>
          <Breadcrumb>Bread</Breadcrumb>
        </Row>
        <Row>
          <Col>
            {section === "org" && <AdminOrg {...data} />}

            {section === "users" && <AdminUsers {...data} />}

            {section === "principles" && <Principles {...data} />}
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default AdminSection;
