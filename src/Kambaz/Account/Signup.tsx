import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <Container className="d-flex flex-column align-items-left mt-5">
    <h3 className="mb-4">Sign Up</h3>

    {/* Username Input */}
    <Form.Control
      type="text"
      placeholder="Username"
      className="mb-3"
    />

    {/* Password Input */}
    <Form.Control
      type="password"
      placeholder="Password"
      className="mb-3"
    />

    {/* Verify Password Input */}
    <Form.Control
      type="password"
      placeholder="Verify Password"
      className="mb-3"
    />

    {/* Sign Up Button */}
    <Button className="" href="#">
      Sign Up
    </Button>

    {/* Sign In Link */}
    <p className="mt-3" style={{ backgroundColor: "transparent", color : "black" }}>
      Already have an account? <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </p>
  </Container>
  );
}
