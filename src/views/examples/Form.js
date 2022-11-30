import React from "react";
import { useState,useEffect } from "react";
import RebateCard from "./RebateCard";
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
import RebateCardAdmin from "./RebateCardAdmin";



const  Forms = () => {

  const Admin = localStorage.getItem("Admin");
  const User = localStorage.getItem("User")

    const [user,setUser] = useState({
      Name:"",Email:"",StartDate:"",EndDate:""
    });
    const [Rebates,setRebates] = useState([]);


    const [status,setstatus] = useState({
      status:"",
      documentId:""
    });
    const [isLoading,setIsLoading] = useState(false);


    let name,value,documentId;
    const HandleClick = () => {
      alert("Hello")
      // setIsLoading(true);

      // console.log(status)

      // name = e.target.name;
      // value = e.target.value;
      // setstatus({...status,[name]:value});

      // name = documentId;
      // value = e.target.id;
      // setstatus({...status,[name]:value});
      // setIsLoading(false);
      // updateStatus();
    }

    async function updateStatus(){

      const response =  await fetch('http://localhost:3001/admin/rebate',{
          method:"PUT",
            headers: {
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              documentId:status.documentId,
              status:status.status
            })
          });

          const data = await response.json();
          console.log(data);
          if(data.update){
            alert(data.update)
          }else{
            alert(data.error);
          }
    }

    const HandleChange = (e) => {
      console.log(user)

      name = e.target.name;
      value = e.target.value;

      setUser({...user,[name]:value});
    }

  async function SubmitRebate(e){
    setIsLoading(true);
  e.preventDefault();
    const response =  await fetch('http://localhost:3001/admin/rebate',{
      method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          Name:user.Name,
          Email:user.Email,
          StartDate:user.StartDate,
          EndDate:user.EndDate
        })
      });

      const data = await response.json();
      if(data.rebate){
        alert(data.rebate);
        // window.location.href="/admin/issues"
      }else{
        alert(data.error);
      }

      // console.log(data);
      setIsLoading(false);
    }

    async function FetchRebate(){
      setIsLoading(true);
        const response =  await fetch('http://localhost:3001/admin/rebate',{
          method:"GET",
            headers: {
              "Content-Type":"application/json",
            },

          });

          const data = await response.json();
          console.log(data);
          if(data)setRebates(data.data);
      setIsLoading(false);

        }

    useEffect(()=>{
      FetchRebate()
    },[isLoading])


    return (
      <>
      {User==="True" &&
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
                  type="text"
                  name="Name"
                  value={user.value}
                  onChange={HandleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label style={{color:"white"}}>Email</label>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                  name="Email"
                  value={user.value}
                  onChange={HandleChange}
                  required
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
                  name="StartDate"
                  value={user.value}
                  onChange={HandleChange}
                  required
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
                  name="EndDate"
                  value={user.value}
                  onChange={HandleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color="secondary" type="button" id="btn_submit" onClick={SubmitRebate}>
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

          {Rebates.map((rebate)=>(
            // console.log(rebate)
                <RebateCard
                key={rebate._id}
                StartDate={rebate.StartDate}
                EndDate={rebate.EndDate}
                Status={rebate.Status}
                Money={rebate.Money}/>
              ))}
          </tbody>
        </Table>
        </>}
        {Admin==="True" &&
        <>
         <Container  fluid style={{paddingTop:"10%",paddingBottom:"2%",backgroundColor:"#009FFD"}}>
         <Table
                  className="align-items-center table-dark"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">From</th>
                      <th scope="col">To</th>
                      <th scope="col">Mark Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
        {Rebates.map((rebate)=>(
          <RebateCardAdmin
          handleClick={HandleClick}
          key={rebate._id}
          Id={rebate._id}
          StartDate={rebate.StartDate}
          EndDate={rebate.EndDate}
          Name={rebate.Name}
          Status={rebate.Status}
          Email={rebate.Email}
        />)
        )}
                </tbody>
      </Table>
         </Container>

        </>
        }
</>
    );
}

export default Forms;