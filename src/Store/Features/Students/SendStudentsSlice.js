import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// @ts-ignore
export const postStudentsData = createAsyncThunk("sendStudentsSlice/postStudentsData",async ({studentName,classYear,teacher,age,phone}) => {
  console.log(studentName,age,phone);
  let data= await axios.post(`http://localhost:3000/myData`,{
    studentName,
    age,
    year:classYear,
    teacher,
    phone
  })
  return data
})

let initialState = {
  StudentsData: [],
  loading: false,
  error: null
}

// @ts-ignore
export const sendStudentsSlice = createSlice({
  name:"sendStudentsData",
  initialState,
  extraReducers:(builder) => {   
    builder.addCase(postStudentsData.pending, (state) => {
      state.loading = true 
    })
    builder.addCase(postStudentsData.fulfilled, (state,action) => {
      state.loading = false
      // @ts-ignore
      state.StudentsData = action.payload 
    })
    builder.addCase(postStudentsData.rejected, (state) => {
      state.loading = false

  })

  
}})