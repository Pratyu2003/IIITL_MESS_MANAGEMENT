import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Button,
  Container,
  Table,
  Badge
} from "reactstrap";



const  Forms = () => {
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
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label style={{color:"white"}}>Roll No</label>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row style={{display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        // backgroundColor:'black'
        }}>
            <Col md="6">
              <FormGroup>
                <label style={{color:"white"}}>Start Date</label>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="dd/mm/yyyy"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label style={{color:"white"}}>End Date</label>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="dd/mm/yyyy"
                  type="date"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color="secondary" type="button" id="btn_submit">
          Submit
        </Button>
        </Form>
      </Container>
       <h2 style={{margin:"1%"}}>Submitted Rebate Requests</h2>
       <Table className="align-items-center" responsive style={{marginLeft:"5%"}}>
          <thead className="thead-light">
            <tr>
              <th style={{fontSize:"15px", color:"black", fontWeight:"bolder"}} scope="col">From</th>
              <th style={{fontSize:"15px", color:"black", fontWeight:"bolder"}} scope="col">To</th>
              <th style={{fontSize:"15px", color:"black", fontWeight:"bolder"}} scope="col">Status</th>
              <th style={{fontSize:"15px", color:"black", fontWeight:"bolder"}} scope="col">Rebate Amount</th>
              <th style={{fontSize:"15px", color:"black", fontWeight:"bolder"}} scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i style={{fontSize:"15px"}} className="bg-info" />
                  pending
                </Badge>
              </td>

              <td style={{fontSize:"15px"}}>
                $1000
              </td>

            </tr>
            <tr>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i style={{fontSize:"15px"}} className="bg-info" />
                  pending
                </Badge>
              </td>

              <td style={{fontSize:"15px"}}>
                $1000
              </td>

            </tr>
            <tr>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i style={{fontSize:"15px"}} className="bg-danger" />
                  Rejected
                </Badge>
              </td>

              <td style={{fontSize:"15px"}}>
                $1000
              </td>

            </tr>
            <tr>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i style={{fontSize:"15px"}} className="bg-success" />
                  Accepted
                </Badge>
              </td>

              <td style={{fontSize:"15px"}}>
                $1000
              </td>

            </tr>
            <tr>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td style={{fontSize:"15px"}}>dd/mm/yyyy</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i style={{fontSize:"15px"}} className="bg-success" />
                  Accepted
                </Badge>
              </td>

              <td style={{fontSize:"15px"}}>
                $1000
              </td>

            </tr>
          </tbody>
        </Table>
      </>
    );
}

export default Forms;