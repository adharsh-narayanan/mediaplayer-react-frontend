import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAvideo } from '../services/allAPI';

function VideoCard({displayVideo, setdeleteVideoStatus,isPresent}) {

 // console.log(displayVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    let caption = displayVideo.caption;
    let url= displayVideo.embedLink;
    let time = new Date();

    //Intl.DateTimeFormat() constructor 
    let timestamp = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

    //console.log(caption,url,timestamp);

    let reqbody ={
      caption,url,timestamp
    }

    //function to add to history
    const response = addToHistory(reqbody)
    console.log(response);
  }
 //function to add to history
  const handleDelete =async(id)=>{
    const response =  await deleteAvideo(id)
    setdeleteVideoStatus(true)   
    console.log(response);

  }
//function to drag card
  const videoDrag =(e,id)=>{
    console.log(`card with id ${id} have been dragged`);
    e.dataTransfer.setData("videoId",id)
  }
  return (
   <>
      <Card onClick={handleShow} style={{ width: '100%' }} draggable onDragStart={(e)=>{videoDrag(e,displayVideo.id)}} className='mt-4'>
       {!isPresent && <Card.Img  variant="top" src={displayVideo?.imageUrl} width={'100%'} height={'300px'} />}
        <Card.Body className='d-flex'>
          <Card.Title></Card.Title>
          <Card.Text>
        {displayVideo?.caption?.slice(0,20)}
           </Card.Text>
         { !isPresent && <Button className='btn btn-danger ms-auto ' onClick={()=>{handleDelete(displayVideo?.id)}}><FontAwesomeIcon icon={faTrashCan} /></Button> }
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe  width="100%" height="391" src={`${displayVideo?.embedLink}?autoplay=1`} title="Dune: Part Two | Official Trailer 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
        
      </Modal>
   </>
  )
}

export default VideoCard