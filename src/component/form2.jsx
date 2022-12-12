// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function PasswordForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <FormControl
        type={showPassword ? "text" : "password"}
        placeholder="Masukkan password Anda"
      />
      <InputGroup.Append>
        <InputGroup.Text>
          <a
            href="http://localhost:3000/"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Sembunyikan" : "Tampilkan"}
          </a>
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
}
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [validated, setValidated] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     } else if (password !== confirmPassword) {
//       setError(true);
//       event.preventDefault();
//       event.stopPropagation();
//     } else {
//       setError(false);
//       //submit form
//     }
//     setValidated(true);
//   };
//   // Proses validasi password dan confirm password di sini

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Enter password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Form.Control.Feedback type="invalid">
//           Please enter a password.
//         </Form.Control.Feedback>
//       </Form.Group>
//       <Form.Group controlId="formBasicConfirmPassword">
//         <Form.Label>Confirm Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Confirm password"
//           required
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <Form.Control.Feedback type="invalid">
//           Please confirm your password.
//         </Form.Control.Feedback>
//       </Form.Group>
//       {error && (
//         <Alert variant="danger">
//           Password and confirm password do not match.
//         </Alert>
//       )}
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }
