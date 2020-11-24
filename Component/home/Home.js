import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardText} from "mdbreact";
import Lightbox from "react-image-lightbox";
import { Navbar} from 'react-bootstrap';
import "./home.css";

const images = [
  "https://www.transindiatravels.com/wp-content/uploads/old-bombay-mumbai.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/ramanathaswamy-temple-rameswaram.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/old-goa-1.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/city-palace-jaipur-2.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/the-ridge-shimla.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/mysore-palace-mysore.jpg",
];

const smallImages = [
  "https://www.transindiatravels.com/wp-content/uploads/old-bombay-mumbai.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/ramanathaswamy-temple-rameswaram.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/old-goa-1.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/city-palace-jaipur-2.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/the-ridge-shimla.jpg",
  "https://www.transindiatravels.com/wp-content/uploads/mysore-palace-mysore.jpg",
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (

      
      <MDBContainer>
        <div className="mdb-lightbox no-margin">
        <div className="center-navbar">
           <Navbar style={{backgroundColor: "lightblue", alignContent: "center"}}>
              <Navbar.Brand ><b>Welcome to MyTrip</b></Navbar.Brand>
           </Navbar>
        </div>
          <MDBRow>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
              {/* <MDBCardBody cascade> */}
              <MDBCardTitle> Bombay</MDBCardTitle>
              <MDBCardText>Rating: <b>***</b></MDBCardText>
              {/* </MDBCardBody> */}
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
              <MDBCardTitle>Rameswaram</MDBCardTitle>
              <MDBCardText>Rating:<b>****</b></MDBCardText>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                  
                />
                <MDBCardTitle>Goa</MDBCardTitle>
              <MDBCardText>Rating:<b>****</b></MDBCardText>
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
                <MDBCardTitle>Jaipur</MDBCardTitle>
              <MDBCardText>Rating:<b>****</b></MDBCardText>
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
                <MDBCardTitle>Shimla</MDBCardTitle>
              <MDBCardText>Rating:<b>****</b></MDBCardText>
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
              </figure>
              <MDBCardTitle>Mysore</MDBCardTitle>
              <MDBCardText>Rating:<b>****</b></MDBCardText>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default Home;