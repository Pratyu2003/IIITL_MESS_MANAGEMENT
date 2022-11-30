import React from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from 'reactstrap';

const FeedbackCard = (props) => {
  return (
    <div>
      <Card style={{ width: "90%",
        marginLeft:"2%",
        justifyContent: 'center', marginBottom:"3%"}} className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="h2 font-weight-bold mb-0">
                    {props.date.substring(0,10)}
                  </CardTitle>
                  <span className="text-muted mb-0">{props.feedbackInfo}</span>
                </div>
                <Col className="col-auto">
                  
                </Col>
              </Row>

            </CardBody>
          </Card>
    </div>
  );
};

export default FeedbackCard;


