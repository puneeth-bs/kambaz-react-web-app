
import { Container, Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <Container className="profile-container">
      <h3 className="mb-4">Profile</h3>
      
      <Form>
        <Form.Control className="mb-3" defaultValue="alice" placeholder="Username" />
        <Form.Control className="mb-3" defaultValue="123" type="password" placeholder="Password" />
        <Form.Control className="mb-3" defaultValue="Alice" placeholder="First Name" />
        <Form.Control className="mb-3" defaultValue="Wonderland" placeholder="Last Name" />
        <Form.Control className="mb-3" type="date" defaultValue="2000-01-01" />
        <Form.Control className="mb-3" type="email" defaultValue="alice@wonderland.com" />
        
        <Form.Select className="mb-3" defaultValue="USER">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>

        <Button className="w-100" variant="danger" href="/Kambaz/Account/Signin">
          Signout
        </Button>
      </Form>
    </Container>
  );
}
