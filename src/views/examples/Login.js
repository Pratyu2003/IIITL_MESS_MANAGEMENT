// reactstrap components
import { useState } from "react";
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

const Login = () => {

    const [user,setUser] = useState({
      email:"",password:""
    });

    let name,value;
    const handleChange = (e) => {
      console.log(user)

      name = e.target.name;
      value = e.target.value;

      setUser({...user,[name]:value});
    }

  async function LoginUser(e){
  e.preventDefault();
    const response =  await fetch('http://localhost:3001/auth/login',{
      method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          email:user.email,
          password:user.password,
        })
      });

      const data = await response.json();
      console.log(data);
      if(data.admin){
        alert("logged in as admin Successfully")
        window.location.href="/admin/index"
        localStorage.setItem("Admin","True")
        localStorage.setItem("User","False")
      }
      else if(data.user){
        alert("User Logged in Successfully")
        window.location.href="/admin/user-profile"
        localStorage.setItem("Admin","False")
        localStorage.setItem("User","True")
      }else{
        alert("Check your email and password");
      }
      console.log(data);
    }


  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
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
                    value={user.value}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>
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
                    name="password"
                    autoComplete="new-password"
                    value={user.value}
                     onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button"
                onClick={LoginUser}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small href="/auth/register">Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
