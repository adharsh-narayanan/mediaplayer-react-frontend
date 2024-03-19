import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import VideoCard from '../component/VideoCard'
import { addACategory, deleteCategory, getAvideo, getCategoryData, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';






function Category({setvideoDragandRemoveStatus,videoDragandRemoveStatus}) {
  const [show, setShow] = useState(false);

  //state to store category name
  const[categoryName,setcategoryName]=useState("")
 //state to get categories
 const[getcategory,setgetcategory]=useState([])
 const [categoryStatus,setcategoryStatus]=useState(false)
 const[deleteCategorystatus,setdeleteCategorystatus]=useState(false)


 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);

  //function to add category
  
 const handleCategoryAdd =async()=>{
 if(categoryName){
  let reqbody ={
    category:categoryName,
    allVideos:[]
  }
  const response = await addACategory(reqbody)
  console.log(response);
  if(response.status>=200 && response.status<300){
    setcategoryName("")
    handleClose()
    setcategoryStatus(true)
    toast.success('New category added')
   
  }
  else{
    toast.error(`something went wrong`)
  }

 }
 else{
  toast.error(`Category Name is Required`)
 }


 }

 //function to get category
 const Allcategory =async()=>{

  const response = await getCategoryData()
  //console.log(response);
  setgetcategory(response.data)  
 }

 console.log(getcategory);


 //function to delete category
 const handleDeleteCategory=async(id)=>{
  await deleteCategory(id) 
  setdeleteCategorystatus(true)
 }

//drag and drop

const dragOver=(e)=>{
e.preventDefault()
}
//to get video id 

const videoDrop=async(e,categoryId)=>{

  console.log(`category is ${categoryId}`);
  const videoId = e.dataTransfer.getData("videoId")
  console.log(videoId);

  //api to call a particular video that been dragged
  const {data} = await getAvideo(videoId)
  console.log(data);

  //to get selected category

  const selectedCategory = getcategory.find((item)=>item.id===categoryId)
  console.log(selectedCategory);
  if(selectedCategory.allVideos.find(item=>item.id==videoId)){
    toast.error(`video is already present`)
  }
  else{
    selectedCategory.allVideos.push(data)
  }
 

  //function to update category
  await updateCategory(categoryId,selectedCategory)
  Allcategory()

}

//function to remove cards from category by dragging
const dragStart= (e,categoryId,videoId) =>{
  console.log(`category is is ${categoryId} and video id is ${videoId}  `);
  const dataShared = {
    categoryId,videoId
  }
  e.dataTransfer.setData("dataShared",JSON.stringify(dataShared))
}



 useEffect (()=>{  
  Allcategory()
  setcategoryStatus(false)
  setdeleteCategorystatus(false)
  setvideoDragandRemoveStatus(false)
  
},[categoryStatus,deleteCategorystatus,videoDragandRemoveStatus])

  return (
    <>
    <div className='d-flex mx-3 '>       
       <button onClick={handleShow} className='btn btn-warning rounded w-100'>Add New Category</button>
     </div>

     <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPen} className='text-warning me-3' />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className=''>
              <Form.Control type="text" placeholder="Enter the category Name" onChange={(e)=>{setcategoryName(e.target.value)}} />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>

      
     {
      getcategory?.length>0? <div>
      {
       getcategory?.map((item)=>(
         <div className='mt-4 ms-3 border border-secondary p-3 rounded' droppable onDragOver={(e)=>{dragOver(e)}} onDrop={(e)=>{videoDrop(e,item.id)}}>
           <div className='d-flex justify-content-center align-items center'>
           <p>{item.category}</p>
           <button onClick={()=>{handleDeleteCategory(item.id)}} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>  
         </div>
         <Row>
          { item.allVideos?.length>0?item.allVideos.map((card)=>(<Col sm={12} draggable onDragStart={(e)=>{dragStart(e,item.id,card.id)}}>
            <VideoCard displayVideo={card} isPresent={true}/>
             </Col>))
          :null
            
          }
         
           </Row>
        </div>
       ))
      }
    
   </div>:<p  className='text-danger text-center mt-3 ms-3 border border-secondary p-3 rounded'>No Categories to show</p>
     }
    <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}


export default Category