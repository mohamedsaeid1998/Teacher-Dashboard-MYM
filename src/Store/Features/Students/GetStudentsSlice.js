
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getStudentsData = createAsyncThunk("getStudentsSlice/getStudentsData",async () => {
  let {data} = await axios.get(`http://localhost:3000/myData`)
  return data
}) 


let initialState = {
  Students: [],
  loading: false,
  error: null
}

// @ts-ignore
export const getStudentsSlice = createSlice({
  name:"Students",
  initialState,
  extraReducers: (builder) =>{
    builder.addCase(getStudentsData.pending, (state) => {
      state.loading = true 
    })
    builder.addCase(getStudentsData.fulfilled, (state,action) => {
      state.loading = false
      state.Students = action.payload 
    })
    builder.addCase(getStudentsData.rejected, (state,action) => {
      state.loading = false
      state.error = action.error.message 
    })
  }



})