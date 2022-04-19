import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useAuth } from "util/auth";

import { gql, useMutation } from "@apollo/client";

const STORY_CREATE = gql`
  mutation StoryCreate(
    $situation: String!
    $task: String!
    $action: String!
    $result: String!
    $auth0Uid: String!
    $principleId: Int
    $organizationId: Int
  ) {
    storyCreate(
      input: {
        storyInput: {
          situation: $situation
          task: $task
          action: $action
          result: $result
          auth0Uid: $auth0Uid
          principleId: $principleId
          organizationId: $organizationId
        }
      }
    ) {
      story {
        situation
        task
        action
        result
        userId
        principleId
        organizationId
      }
    }
  }
`;

function NewStoryModalLauncher(props) {
  const [show, setShow] = useState(false);
  const auth = useAuth();
  console.log(auth.user);
  const [storyCreate, { data, loading, error }] = useMutation(STORY_CREATE);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      <Button
        id="new-story"
        variant="primary"
        size="md"
        onClick={() => setShow(true)}
      >
        New Story
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton={true}>
          <Modal.Title>New Career Story</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group controlId="formSituation">
              <Form.Label>Situation</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                placeholder="Enter situation"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Group controlId="formTask">
                <Form.Label>Task</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Enter task"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formAction">
                <Form.Label>Action</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Enter action"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formResult">
                <Form.Label>Result</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Enter result"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setShow(false)}
              >
                Close
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  storyCreate({
                    variables: {
                      situation: formSituation.value,
                      task: formTask.value,
                      action: formAction.value,
                      result: formResult.value,
                      auth0Uid: auth.user.uid,
                      organizationId: 1,
                      principleId: 1,
                    },
                  });
                  setShow(false);
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}

export default NewStoryModalLauncher;
