import React, { useState } from 'react'
import Add from '../component/Add'
import { Link } from 'react-router-dom'
import './Home.css'
import View from '../component/View'
import Category from '../component/Category'




function Home() {
  const [uploadVideoStatus,setuploadVideoStatus]=useState({})
  const [videoDragandRemoveStatus,setvideoDragandRemoveStatus]=useState(false)
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-5" >
        <Add  setuploadVideoStatus={setuploadVideoStatus}/>
        <Link id='link'  to={'/Watchhistory'} >Watch Hisory</Link>
      </div>

      <div className='row p-4'>
        <div className="col-md-9">
          <h4 className='mt-4'>All Videos</h4>
          <View  uploadVideoStatus={uploadVideoStatus} setvideoDragandRemoveStatus={setvideoDragandRemoveStatus} />
        </div>
        <div className="col-md-3 mt-4">
          <Category setvideoDragandRemoveStatus={setvideoDragandRemoveStatus} videoDragandRemoveStatus={videoDragandRemoveStatus} />
        </div>
      </div>
    </>
  )
}

export default Home