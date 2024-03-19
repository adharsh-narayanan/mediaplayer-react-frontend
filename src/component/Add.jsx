import { useState } from 'react';
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { Form } from 'react-bootstrap';
import { uploadVideoApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';





function Add({setuploadVideoStatus}) {
  const [videos, setVideo] = useState({
    id: "",
    caption: "",
    imageUrl: "",
    embedLink: ""
  })


   const getEmbedLink=(e)=>{
  const text= e.target.value;

  if(text.endsWith("/feature=shared")){
  console.log(text.slice(-26,-15));
  const link=`https://www.youtube.com/embed/${text.slice(-26,-15)}`
  setVideo({...videos,embedLink:link})
   }
   else if(text.startsWith("https://youtu.be/")){
    const link=`https://www.youtube.com/embed/${text.slice(17,28)}`
    setVideo({...videos,embedLink:link})

   }
   else{
    console.log(text.slice(-11));
    const link=`https://www.youtube.com/embed/${text.slice(-11)}`
    setVideo({...videos,embedLink:link})
   }
  }
   console.log(videos);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
     
  const handleUpload = async()=>{
    const{ id,caption,imageUrl,embedLink} = videos
    //console.log(id,caption,imageUrl,embedLink);
    if(!id||!caption||!imageUrl||!embedLink){
      toast.info('enter values')
    }
    else{
      const response= await uploadVideoApi(videos)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Video uploaded Succesfully')
     
        setVideo({
          id: "",
          caption: "",
          imageUrl: "",
          embedLink: ""
        })
        handleClose()
        setuploadVideoStatus(response?.data) 

      }
      else{
        //console.log(response);
        toast.error(`hm....something went wrong`)
      }
    }

  }
  return (

    <>
      <div className='d-flex '>
        <h5 className='me-2 mt-2'>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><FontAwesomeIcon icon={faCloudArrowUp} size='2xl' /></button>

      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the following details</p>

          <Form className='rounded border p-3 border dark'>
            <Form.Group className='mb-3 mt-3'>
              <Form.Control type="text" placeholder="Enter the video id" onChange={(e)=>setVideo({...videos,id:e.target.value})} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the video caption"  onChange={(e)=>setVideo({...videos,caption:e.target.value})} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the video image url"  onChange={(e)=>setVideo({...videos,imageUrl:e.target.value})} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the youtube video link" onChange={(e)=>{getEmbedLink(e)}} />
            </Form.Group>



          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary rounded p2' onClick={handleClose}>
            Cancel
          </button>
          <button className='btn btn-warning rounded p2' onClick={handleUpload}>
            Add
          </button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Add



/* <iframe width="695" height="391" src="https://www.youtube.com/embed/VHYVipdTE8k" title="Dune ( Denis Villeneuve )  Making of &amp; Behind the Scenes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */