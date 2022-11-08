import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Signin() {
  return (
    <Container className="w-50">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastNames">
            <Form.Label>Last Names</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>

        <Form.Group controlId="kindOfStand">
        <Form.Label>Gender</Form.Label>
            <Form.Check
                value="Male"
                type="radio"
                aria-label="radio 1"
                label="Male"
            />
            <Form.Check
                value="Female"
                type="radio"
                aria-label="radio 2"
                label="Female"
                />
            <Form.Check
                value="food"
                type="radio"
                aria-label="radio 2"
                label="Other"
                />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Signin;