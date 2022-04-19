import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth } from "util/auth";

import { gql, useMutation } from "@apollo/client";

const ORGANIZATION_CREATE = gql`
  mutation OrganizationCreate(
    $name: String!
    $description: String!
    $creator: String!
  ) {
    organizationCreate(
      input: {
        organizationInput: {
          name: $name
          description: $description
          creator: $creator
        }
      }
    ) {
      organization {
        name
        description
      }
    }
  }
`;

function AdminOrg(props) {
  const auth = useAuth();
  const [organizationCreate, { data, loading, error }] =
    useMutation(ORGANIZATION_CREATE);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter org name" />
          <Form.Text className="text-muted">
            Give your team, org or company a name.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            placeholder="Enter task"
          />
          <Form.Text className="text-muted">
            Tells us a little about your org.
          </Form.Text>
        </Form.Group>
        <Button
          variant="secondary"
          size="md"
          onClick={() => {
            organizationCreate({
              variables: {
                name: formName.value,
                description: formDescription.value,
                creator: auth.user.uid,
              },
            });
          }}
        >
          Save Changes
        </Button>
      </Form>
    </>
  );
}

export default AdminOrg;
