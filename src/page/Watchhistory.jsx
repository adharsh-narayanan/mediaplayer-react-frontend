import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllVideoHistory } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';




function Watchhistory() {

  const [videoHistory,setvideoHistory]=useState([])
  const [deleteHistoryStatus,setdeleteHistoryStatus]=useState(false)
  



//function to get watchhistory
  const getHistory = async ()=>{
    const response= await getAllVideoHistory()
     //  console.log(response);
    setvideoHistory(response.data) 

  }
  //console.log(videoHistory);


  //function to delete watchhistory
  const handleDelete =async(id)=>{
    const response = await deleteWatchHistory(id)

    if(response.status>=200 && response.status<300){
      setdeleteHistoryStatus(true)
    }
    else{
      toast.error(`hm....something went wrong`)
    }
   // console.log(response);
  }
  
  useEffect (()=>{
    getHistory()
    setdeleteHistoryStatus(false)
  },[deleteHistoryStatus])



  return (
    <>
      <div className='d-flex justify-content-between p-5 m-5 align-items-center'>
        <h3>Watch history</h3>
        <h6> <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }} > <FontAwesomeIcon className='me-2' icon={faArrowLeft} beat />Back to Home</Link></h6>
      </div>

      <div className='d-flex justify-content-center align-items-center p-4 mx-5'>
       {videoHistory?.length>0? <table className='table text-center'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            videoHistory?.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><a href={item.url} target='_blank'>{item.url}</a></td>
              <td>{item.timestamp}</td>
              <td><button onClick={()=>{handleDelete(item.id)}} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
            </tr>
            ))
           }
          </tbody>
        </table>:<p className='text-danger'>No watch history</p>}
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    
    </>
  )
}

export default Watchhistory