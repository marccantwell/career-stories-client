import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function NewStoryModalLauncher(props) {
  const [show, setShow] = useState(false);

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
                onClick={() => setShow(false)}
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
