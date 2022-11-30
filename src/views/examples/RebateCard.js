import React from 'react';

import {
  Badge
} from 'reactstrap';

const RebateCard = (props) => {
  return (
    <>
    <tr>
    <td style={{fontSize:"15px"}}>{props.StartDate}</td>
    <td style={{fontSize:"15px"}}>{props.EndDate}</td>
    <td>
     { props.Status === "pending" && <Badge color="" className="badge-dot mr-4 danger">
        <i style={{fontSize:"15px"}} className="bg-info" />
        {props.Status}
       </Badge>}
       { props.Status === "accepted" && <Badge color="" className="badge-dot mr-4 danger">
        <i style={{fontSize:"15px"}} className="bg-success" />
        {props.Status}
       </Badge>}
       { props.Status === "rejected" && <Badge color="" className="badge-dot mr-4 danger">
        <i style={{fontSize:"15px"}} className="bg-danger" />
        {props.Status}
       </Badge>}
    </td>

    <td style={{fontSize:"15px"}}>
    ₹{props.Money}
    </td>
  </tr>
    </>
  );
};

export default RebateCard;


