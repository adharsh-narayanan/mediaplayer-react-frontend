import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getCategoryData, getUploadedVideoApi, updateCategory } from '../services/allAPI'


function View({uploadVideoStatus,setvideoDragandRemoveStatus}) {
  const [video,setVideo]=useState([])
  const[deleteVideoStatus,setdeleteVideoStatus]=useState(false)

  const getVideos = async()=>{
   const response= await getUploadedVideoApi()
   //console.log(response);
   const {data} =response
   //console.log(data);
   setVideo(data)
  
  }

 // console.log(video);
 const dragOver =(e)=>{
  
  e.preventDefault()
}

const videoDrop = async(e)=>{
  const { categoryId,videoId} =JSON.parse( e.dataTransfer.getData("dataShared"))
  console.log( categoryId,videoId);
 //get all category
  const{data} = await getCategoryData()
  //access the object with the category id from all category
  let selectedCategory = data.find((item)=>item.id==categoryId)
  //filtering the category object by removing the video object from all videos
  let result = selectedCategory.allVideos.filter((item)=>item.id!==videoId)
  console.log(result);
  let newCategory = {
    category:selectedCategory.category,allVideos:result,id:categoryId
  }
  //updating the category
   await updateCategory(categoryId,newCategory)
   setvideoDragandRemoveStatus(true)
}


  useEffect(()=>{
    getVideos()
    setdeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])
  
  return (
    <>

    <Row droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
     {
      video?.length>0?
      video?.map((items)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayVideo={items} setdeleteVideoStatus={setdeleteVideoStatus}/>
      </Col>
      )):<p className='text-warning fs-2 fw-bold'> No Videos are uploadede yet</p>
     }
     
    </Row>

    </>
  )
}

export default View