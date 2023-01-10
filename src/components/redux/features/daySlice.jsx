import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  days: [],
  error: ''
}

export const fetchDays2 = createAsyncThunk('day/fetchDays', async () => {
 try {
  const res = await fetch('http://localhost:5000/days')
  const data = await res.json()
  return  data
 } catch (error) {
    alert("Oups something wrong")
 }
})
const daySlice = createSlice({
  name:'day',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDays2.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchDays2.fulfilled, (state, action)=> {
      state.loading = false
      state.days = action.payload
      state.error = ''
    })
    builder.addCase(fetchDays2.rejected, (state, action) => {
      state.loading = false
      state.days = []
      state.error = action.payload.error.message
    })
  }
})

export default daySlice.reducer