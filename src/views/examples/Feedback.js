import React, { useEffect } from "react";


// reactstrap components
import {
  Form,
  Input,
  Col,
  FormGroup,
  Container,
  Row,
  Button,
} from "reactstrap";

import { useState } from "react";
import FeedbackCard from "./FeedbackCard";

const Feedback = ()=>{

  const [user,setUser] = useState({
    Name:"",Email:"",Feedback:""
  });
  const [feedBacks,setFeedbacks] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const User = localStorage.getItem("User");
  const Admin = localStorage.getItem("Admin");


  let name,value;
  const HandleChange = (e) => {
    console.log(user)

    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

async function SubmitFeedback(e){
  setIsLoading(true);
e.preventDefault();
  const response =  await fetch('http://localhost:3001/admin/issues',{
    method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        Name:user.Name,
        Email:user.Email,
        Feedback:user.Feedback
      })
    });

    const data = await response.json();
    if(data.feedback){
      alert(data.feedback);
      // window.location.href="/admin/issues"
    }else{
      alert(data.error);
    }

    // console.log(data);
    setIsLoading(false);
  }

  async function FetchFeedback(){
    setIsLoading(true);
      const response =  await fetch('http://localhost:3001/admin/issues',{
        method:"GET",
          headers: {
            "Content-Type":"application/json",
          },

        });

        const data = await response.json();
        // console.log(data);
        if(data)setFeedbacks(data.data);
    setIsLoading(false);

      }

  useEffect(()=>{
    FetchFeedback()
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
                  name="Email"
                  placeholder="LXX20XX0XX@iiitl.ac.in"
                  type="emial"
                  value={user.value}
                  onChange={HandleChange}
                  required
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
            name="Feedback"
            value={user.value}
            onChange={HandleChange}
            required
          />
          <Button color="secondary" type="button" value="submit" id="btn_submit" style={{margin:"2% 2% 2% 0%"}} onClick={SubmitFeedback}>
          Submit
        </Button>
        </Form>
      </Container>
      </>}
      <h2 style={{margin:"1%"}}>Recent Feedbacks</h2>
        <div>
          {feedBacks.map((feedback)=>(
            // console.log(feedback)
            <FeedbackCard
              key={feedback._id}
              date={feedback.date}
              feedbackInfo={feedback.FeedbackInfo}
            />
          ))}
        </div>
      </>
    );
}

export default Feedback;