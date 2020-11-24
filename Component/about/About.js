import React from 'react';
import { Navbar,} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardText } from "mdbreact";

class About extends React.Component{
   render(){
      return(
         <MDBContainer>
          <div className="center-navbar">
            <Navbar style={{backgroundColor: "lightblue", alignContent: "center"}}>
              <Navbar.Brand ><b>Contact Us</b></Navbar.Brand>
            </Navbar>
          </div>

          <MDBRow>
            <MDBCol xl="7" md="4" className="mb-3 text-md-right text-center">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBCol>
          </MDBRow>

            <MDBCardTitle>MyTrip</MDBCardTitle>
            <MDBCardText><b>Address: </b> 50, 2nd Floor, Brigade MLR Center, Vanivilas Rd, 
            <br></br>Bengaluru, Karnataka 560004
            <br></br><b>Contact No:</b> 8329602644</MDBCardText>
         </MDBContainer>
      )
   }
   
}
export default About;



