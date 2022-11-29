
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

const Register = () => {
  const [user,setUser] = useState({
    name:"",email:"",password:"",RoomNo:"",HostelNo:""
  });

  let name,value;
  const handleChange = (e) => {
    console.log(user)

    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

async function RegisterUser(e){
e.preventDefault();
  const response =  await fetch('http://localhost:3001/auth/register',{
    method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name:user.name,
        email:user.email,
        password:user.password,
        RoomNo:user.RoomNo,
        HostelNo:user.HostelNo
      })
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign up with IIITL college credentials</small>
            </div>
            <Form role="form" method="POST">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input name="name" placeholder="Name" type="text" value={user.value} onChange={handleChange} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    name="email"
                    value={user.value} onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative md-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-badge" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Room No"
                        type="text"
                        autoComplete=""
                        name="RoomNo"
                        value={user.value} onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative md-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-badge" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Hostel - old/new"
                        type="text"
                        autoComplete=""
                        name="HostelNo"
                        value={user.value} onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    value={user.value} onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>

              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button" onClick={RegisterUser}>
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
