// import { render } from "@testing-library/react";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";

function Formlogin() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (password !== confirmPassword) {
      setError(true);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setError(false);
    }

    setValidated(true);
  };
  return (
    <div className="m-5">
      <Container>
        <Row className="text-start">
          <Col md={5} className="border border-dark rounded p-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <FloatingLabel
                className="mb-3 "
                controlId="formBasicEmail"
                label="Masukan Email"
              >
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">
                  Masukan email yang valid
                </Form.Control.Feedback>
                <Form.Control.Feedback>Bagus!</Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Leave a comment here"
                />
                <Form.Control.Feedback type="invalid">
                  Masukan Username
                </Form.Control.Feedback>
                <Form.Control.Feedback>Bagus!</Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                className="mb-3"
                label="Password"
                controlId="formBasicPassword"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Form.Control.Feedback type="invalid">
                  Masukan password
                </Form.Control.Feedback>
                <Form.Control.Feedback>Bagus!</Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                className="mb-3"
                label="Konfirmasi Password"
                controlId="formBasicConfirmPassword"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Konfirmasi Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Form.Control.Feedback type="invalid">
                  Masukan password
                </Form.Control.Feedback>
                {error && (
                  <Form.Control.Feedback className="text-danger">
                    Password tidak sama!
                  </Form.Control.Feedback>
                )}
              </FloatingLabel>

              <Form.Group
                className="mb-3 d-flex flex-row justify-content-start gap-5"
                controlId="formJenisKelamin"
              >
                <Form.Check
                  type="radio"
                  id="radio"
                  name="jeniskelamin"
                  label="Laki-laki"
                  required
                  feedback="Ceklist terlebih dahulu!"
                  feedbackType="invalid"
                />
                <Form.Check
                  type="radio"
                  id="radio"
                  name="jeniskelamin"
                  label="Perempuan"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="Privasi"
                  feedback="Ceklist terlebih dahulu!"
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Formlogin;
