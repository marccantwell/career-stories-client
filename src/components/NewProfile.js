import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useAuth } from "util/auth";

import { gql, useMutation } from "@apollo/client";

const USER_CREATE = gql`
  mutation ProfileCreate(
    $firstName: String!
    $lastName: String!
    $auth0Uid: String!
  ) {
    userCreate(
      input: {
        userInput: {
          firstName: $firstName
          lastName: $lastName
          auth0Uid: $auth0Uid
        }
      }
    ) {
      user {
        firstName
        lastName
      }
    }
  }
`;

function NewProfile(props) {
  const [show, setShow] = useState(false);
  const auth = useAuth();
  const [userCreate, { data, loading, error }] = useMutation(USER_CREATE);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      <Form>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" as="input" placeholder="Enter First Name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" as="input" placeholder="Enter Last Name" />
          <Form.Text className="text-muted"> </Form.Text>
        </Form.Group>
        <Button
          variant="secondary"
          size="md"
          onClick={() => {
            userCreate({
              variables: {
                firstName: formFirstName.value,
                lastName: formLastName.value,
                auth0Uid: auth.user.uid,
              },
            });
            setShow(false);
          }}
        >
          Save Changes
        </Button>
      </Form>
    </>
  );
}

export default NewProfile;
