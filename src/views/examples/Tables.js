
import {
  Card,
  CardHeader,
  CardFooter,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import UserHeader from "components/Headers/UserHeader";



const Tables = () => {

  const User = localStorage.getItem("User");
  const Admin = localStorage.getItem("Admin");

  return (
    <>
      {Admin==="True" ? <Header />:<UserHeader page="mess"/>}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Mess Menu</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">DAY</th>
                    <th scope="col">Breakfast</th>
                    <th scope="col">Lunch</th>
                    <th scope="col">Snacks</th>
                    <th scope="col">Dinner</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>

                          <span className="mb-0 text-sm">
                            Monday
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <li>Aloo - pyaz Paratha </li>
                      <li>Pickle </li>
                      <li>Milk, Tea Banana - 1pc</li>
                    </td>
                    <td>
                    <li>Rajma</li>
                    <li>Dahi</li>
                    <li>Roti Rice</li>
                    </td>
                    <td>
                      <li>Pasta sauce</li>
                      <li>Tea</li>
                    </td>
                    <td>
                    <li>Shimlamirch</li>
                    <li>Chana Dal</li>
                    <li>Roti Rice</li>
                    </td>

                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>
                          <span className="mb-0 text-sm">
                            Tuesday
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <li>Pav Bhaji </li>
                      <li>Daliya </li>
                      <li>Milk, Tea Banana - 1pc</li>
                    </td>
                    <td>
                    <li>Crunchy Aloo</li>
                    <li>Jeera</li>
                    <li>Kadhi</li>
                    <li>Roti Rice</li>
                    </td>
                    <td>
                      <li>Semiya upma</li>
                      <li>Tea</li>
                    </td>
                    <td>
                    <li>Matar Paneer</li>
                    <li>Mix Dal Fry</li>
                    <li>Roti, Rice</li>
                    </td>

                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>
                          <span className="mb-0 text-sm">
                            Wednesday
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <li>Aloo Poori</li>
                      <li>Daliya </li>
                      <li>Milk, Tea Banana - 1pc</li>
                    </td>
                    <td>
                    <li>Choley</li>
                    <li>Veg Biryani</li>
                    <li>Roti, Raita</li>
                    </td>
                    <td>
                      <li>Poha</li>
                      <li>Namkeen</li>
                      <li>Tea</li>
                    </td>
                    <td>
                    <li>Malai Kofta</li>
                    <li>Arhar Dal Fry</li>
                    <li>Roti Rice</li>
                    <li>Custard / Ice Cream</li>
                    </td>

                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>
                          <span className="mb-0 text-sm">
                            Thursday
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <li>Aloo – pyaz Paratha </li>
                      <li>Pickle - Sauce </li>
                      <li>Milk, Tea Banana - 1pc</li>
                    </td>
                    <td>
                    <li>Black Chana</li>
                    <li>Dahi</li>
                    <li>Roti, Rice</li>
                    </td>
                    <td>
                      <li>Cutlet</li>
                      <li> sauce</li>
                      <li>Tea</li>
                    </td>
                    <td>
                    <li>Soyabean(fry) Aloo</li>
                    <li>Masoor Dal Fry</li>
                    <li>Roti Rice</li>
                    </td>

                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>
                          <span className="mb-0 text-sm">
                            Friday
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <li>Tawa paratha </li>
                      <li>Dahi </li>
                      <li>Milk, Tea Banana - 1pc</li>
                    </td>
                    <td>
                    <li>Besan Pitor Curry</li>
                    <li>Moong Dal Tadka (thick gravy)</li>
                    <li>Roti Rice</li>
                    </td>
                    <td>
                      <li>Samosa </li>
                      <li>Green Chutney</li>
                      <li>Tea</li>
                    </td>
                    <td>
                    <li>Kashmiri Dum Aloo</li>
                    <li>Chana Dal Fry</li>
                    <li>Roti Rice</li>
                    </td>

                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>
                          <span className="mb-0 text-sm">
                            Saturday
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <li>Aloo sandwich </li>
                      <li>Simple Bread </li>
                      <li>Milk, Tea Banana - 1pc</li>
                    </td>
                    <td>
                    <li>Choley Bathure</li>
                    <li>Boondi Raita</li>
                    <li>Rice</li>
                    </td>
                    <td>
                      <li>Conflakes mixture</li>
                      <li>Tea</li>
                    </td>
                    <td>
                    <li>Mix Veg</li>
                    <li>Arhar Dal</li>
                    <li>Roti, Rice</li>
                    </td>

                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>
                          <span className="mb-0 text-sm">
                            Sunday
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <li>Uttapam </li>
                      <li>Sambhar & Coconut Chutney </li>
                      <li>Milk, Tea Banana - 1pc</li>
                    </td>
                    <td>
                    <li>Dal Makhani</li>
                    <li>Tawa Paratha</li>
                    <li>Veg- Biryani</li>
                      <li>Raita</li>
                    </td>
                    <td>
                      <li>Maggie, sauce</li>
                      <li>Tea</li>
                    </td>
                    <td>
                    <li>Kadhai Paneer</li>
                    <li>Mix Dal Fry</li>
                    <li>Roti Rice</li>
                    <li>Gulab Jamun / Jalebi</li>
                    </td>

                  </tr>


                </tbody>
              </Table>
              <CardFooter className="py-4">

              </CardFooter>
            </Card>
          </div>
        </Row>

      </Container>
    </>
  );
};

export default Tables;
