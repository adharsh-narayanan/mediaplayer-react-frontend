import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Landingpage() {
  const navigate=useNavigate()
  return (
 <div  style={{color:'white'}}>
      
        <Row className='d-flex justify-content-center align-items-center mb-5'>
          <Col lg={1}></Col>
          <Col lg={5}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae illum commodi mollitia distinctio iusto voluptas voluptatum saepe maxime unde ipsum! Consequuntur porro perferendis necessitatibus! Laboriosam corrupti fugiat itaque fuga iusto.</p>
            <button onClick={()=>{navigate('/home')}} className='btn btn-warning mt-4'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5}>
            <img src="https://i.pinimg.com/originals/f4/df/f0/f4dff05ee04916b7812adfaf81c29f3e.gif " style={{ width: `500px` }} alt="" />
          </Col>
        </Row>
        <div className="container d-flex justify-content-center align-items-center flex-column mt-5 ">
          <h3>Features</h3>
          <div className='d-flex justify-content-center align-items-center'>
  
            <Card className='p-4 m-3' style={{ width: '22rem' }}>
              <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://media1.tenor.com/m/0a_3IUWNMnsAAAAC/aisyamoda.gif" />
              <Card.Body>
                <Card.Title>Managing Video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
  
              </Card.Body>
            </Card>
  
  
            <Card className='p-4 m-3' style={{ width: '22rem' }}>
              <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/99/f3/4b/99f34b2b899f9f4275080a9e6ea56b9d.gif" />
              <Card.Body>
                <Card.Title>Categorized Video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
  
              </Card.Body>
            </Card>
  
  
            <Card className='p-4 m-3' style={{ width: '22rem' }}>
              <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/65/97/84/6597844008b4d00003b37c6319e26e62.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
  
              </Card.Body>
            </Card>
  
          </div>
        </div>
  
        <div className=' container mt-5 rounded' style={{border:'0.1px solid  grey'}}>
          <Row className='p-5'>
            <Col lg={5} >
              <h3  className='text-warning mb-3' style={{fontSize:'34px',fontWeight:'600'}}>Simple Fast and Powerful</h3>
              <p className='mt-4'><span  style={{fontSize:'28px',textAlign:`justify`}}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia repellat nisi blanditiis nesciunt voluptatibus id, ut error vel commot</p> 
              <p className='mt-4'><span  style={{fontSize:'28px',textAlign:`justify`}}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia repellat nisi blanditiis nesciunt voluptatibus id, ut error vel commo</p>
              <p className='mt-4'><span  style={{fontSize:'28px',textAlign:`justify`}} >Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia repellat nisi blanditiis nesciunt voluptatibus id, ut error vel comm</p>
            </Col>
            <Col lg={1}></Col>
            <Col lg={6}>
            <iframe width="1234" height="400" src="https://www.youtube.com/embed/U2Qp5pL3ovA" title="Dune: Part Two | Official Trailer 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
          </Row>
        </div>
 </div>
    
  )
}

export default Landingpage