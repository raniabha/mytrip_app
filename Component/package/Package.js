import React from 'react'
import {Table} from 'react-bootstrap';
import { Navbar,} from 'react-bootstrap';
import { MDBContainer } from "mdbreact";

class Package extends React.Component{
    render(){
        return(
            <MDBContainer>
            <div className="center-navbar">
              <Navbar style={{backgroundColor: "lightblue", alignContent: "center"}}>
                <Navbar.Brand ><b>Welcome to Trip Packages</b></Navbar.Brand>
              </Navbar>
            </div>
            
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Package Name</th>
                <th>Price</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mumbai</td>
                <td>15k</td>
                
              </tr>
              <tr>
                <td>2</td>
                <td>Jaipur</td>
                <td>10k</td>
                
              </tr>
              <tr>
                <td>3</td>
                <td>Goa</td>
                <td>15k</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Rameshwarm</td>
                <td>5k</td>
              </tr>

              <tr>
                <td>5</td>
                <td>Agra</td>
                <td>20k</td>
              </tr>

              <tr>
                <td>6</td>
                <td>Shimla</td>
                <td>20k</td>
              </tr>
            </tbody>
          </Table>
          </MDBContainer>
        )
    }
}
export default Package;

