import React, { useEffect } from "react";
import { useState } from "react";
// reactstrap components
import {
  Badge,
  Media,
  Table,
  Row,
  Button
} from "reactstrap";

const RebateCardAdmin = (props)=>{

  const [status,setstatus] = useState({
    status:"",
    documentId:""
  });
  const [isLoading,setIsLoading] = useState(false);


  let name,value;
  const  HandleClick =async (e) => {
    const updated={
      status:e.target.value,
      documentId:e.target.id
    }

    setstatus(status=>({
      ...status,
      ...updated
    })
    )
    updateStatus()
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

  // useEffect(() => {
  // },[status.status])


    return (
      <>

            <tr>
              <th scope="row">

                  <Media>
                    <span className="mb-0 text-sm">
                      {props.Name}
                    </span>
                  </Media>
              </th>
              <td>{props.Email}</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-warning" />
                  {props.StartDate}
                </Badge>
              </td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-warning" />
                  {props.EndDate}
                </Badge>
              </td>
              <td>
                  <Row>
                    <Button color="success" id={props.Id} value="accepted" name="status" type="button" onClick={HandleClick}>
                      Accepted
                    </Button>
                    <Button color="danger" id={props.Id} value="rejected" type="button" name="status" onClick={HandleClick}>
                      Reject
                    </Button>
                  </Row>
              </td>
            </tr>

      </>
    );
}

export default RebateCardAdmin