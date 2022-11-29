import React from "react";


// reactstrap components
import {
  Form,
  Input,
  Col,
  FormGroup,
  Container,
  Row,
  Button,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

const Feedback = ()=>{
    return (
      <>
      <Container  fluid style={{paddingTop:"10%",paddingBottom:"2%",backgroundColor:"#009FFD"}}>
      <Form>
        <Row style={{display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        // backgroundColor:'black'
        }}>
            <Col md="6">
              <FormGroup>
                <label style={{color:"white"}}>Name</label>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Student Name"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label style={{color:"white"}}>Roll No</label>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="LXX20XX0XX"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
          <label style={{color:"white"}}>Any Issues / Feedback</label>
          <Input
            id="exampleFormControlTextarea1"
            placeholder="Write Your Feedback here ..."
            rows="3"
            type="textarea"
          />
          <Button color="secondary" type="button" id="btn_submit" style={{margin:"2% 2% 2% 0%"}}>
          Submit
        </Button>
        </Form>
      </Container>
      <h2 style={{margin:"1%"}}>Recent Feedbacks</h2>
        <div >
          <Card style={{ width: "90%",
        marginLeft:"2%",
        justifyContent: 'center', marginBottom:"3%"}} className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="h2 font-weight-bold mb-0">
                    25/11/2022
                  </CardTitle>
                  <span className="  text-muted mb-0">The food in Mess at IIITL is of good quality, hygienic, nutrition food is served to students. LPU Students have an option to avail Mess Plan from the University or may manage on their own. Students are provided with flexible options to choose their preferred mess (within hostel or outside hostel), choice in food varieties and option to avail lunch near respective academic block in case sufficient number of students opt for the same.

"</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="ni ni-fat-remove" />
                  </div>
                </Col>
              </Row>

            </CardBody>
          </Card>
          <Card style={{ width: "90%",
        marginLeft:"2%",
        justifyContent: 'center',marginTop:"1%",
        }} className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="h2 font-weight-bold mb-0">
                    25/11/2022
                  </CardTitle>
                  <span className="text-muted mb-0">The food in Mess at IIITL is of good quality, hygienic, nutrition food is served to students. LPU Students have an option to avail Mess Plan from the University or may manage on their own.case sufficient number of students opt for the same."</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                    <i className="ni ni-check-bold" />
                  </div>
                </Col>
              </Row>

            </CardBody>
          </Card>
          <Card style={{ width: "90%",
        marginLeft:"2%",
        justifyContent: 'center',marginTop:"1%",}} className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="h2 font-weight-bold mb-0">
                    25/11/2022
                  </CardTitle>
                  <span className="text-muted mb-0">The food in Mess at IIITL is of good quality, hygienic, nutrition food is served to students. LPU Students have an option to avail Mess Plan from the University or may manage on their own.case sufficient number of students opt for the same.

"</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i className="ni ni-fat-remove" />

                  </div>
                </Col>
              </Row>

            </CardBody>
          </Card>
        </div>
      </>
    );
}

export default Feedback;