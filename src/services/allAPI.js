

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"
//api for uploading video

//async await because this function also calls an api hence asynchronous

export const uploadVideoApi = async(reqbody)=>{
return await commonApi('post',`${serverUrl}/video`,reqbody)
}


//api to get uploaded video

export const getUploadedVideoApi = async()=>{
  return await commonApi('get',`${serverUrl}/video`,'')
}

//api to delete a particular video

export const deleteAvideo =async (id)=>{
  return await commonApi('DELETE',`${serverUrl}/video/${id}`,{})
}


//api to add watch histrory

export const addToHistory = async(reqbody)=>{
  return await commonApi('post',`${serverUrl}/history`,reqbody)
}

//api to get video from history

export const getAllVideoHistory = async ()=>{
  return await commonApi('get',`${serverUrl}/history`,'')
}

//api to delete watch history

export const deleteWatchHistory = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}


//api to add a category

export const addACategory = async (reqbody)=>{
  return await commonApi('POST',`${serverUrl}/category`,reqbody)
}

//api to get category
export const getCategoryData = async ()=>{
  return await commonApi('get',`${serverUrl}/category`,'')
}

//api to delete category  
export const deleteCategory  = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

//api to get a sinle video from videos

export const getAvideo= async(id)=>{
  return await commonApi('GET',`${serverUrl}/video/${id}`,"")
}

//api to update category

export const updateCategory=async(id,reqbody)=>{
  return await commonApi('PUT',`${serverUrl}/category/${id}`,reqbody)
}