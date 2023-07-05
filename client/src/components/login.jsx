import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

const Login = ({ setId }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(idRef.current.value);
  };

  const createNewId = () => {
    setId(uuidV4());
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Control
            type="text"
            ref={idRef}
            required
            placeholder="id"
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Login</Button>
        <Button variant="secondary" className="ms-2" onClick={createNewId}>
          Create a new ID
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
