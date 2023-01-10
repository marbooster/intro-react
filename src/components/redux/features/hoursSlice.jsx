import { createSlice, createAction, createAsyncThunk, current } from "@reduxjs/toolkit";

export const addClickFunction = createAction('addClickFunction');
export const SerchCoursesClicked = createAction('SerchCoursesClicked')

const initialState = {
  loading: false,
  hours: [],
  coursSelected: [],
  count: 0,
  error: null,
}

export const fetchHours = createAsyncThunk('hour/fetchHours', async (arg,{ rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:5000/hours')
    const data = await response.json();
    return data

  } catch (err) {
    if (!err.response) {
      throw err
    }
    return rejectWithValue(err.response.data)
  }
})
const hoursSlice = createSlice({
  name: 'hour',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHours.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchHours.fulfilled, (state, action) => {
      state.loading = false
      state.hours = action.payload
      state.error = ''
    })
    builder.addCase(fetchHours.rejected, (state, action) => {
      state.loading = false
      state.hours = []
      state.error = action.error.message
    })
      .addCase(addClickFunction, (state, action) => {
        let indexHeures = state.hours.find((heure) => heure.id === action.payload.crenauHeureId)
        indexHeures.cours.map(elementCours => {
          let cour = elementCours.find((cour) => cour.id === action.payload.id)
          if (cour) {
            elementCours.map((otherCourse) => {
              if (otherCourse) {
                if(otherCourse.id !== action.payload.id)
                otherCourse.onSelected = false
              }
            })
            cour.onSelected = !cour.onSelected
          }
        });
      })
  }
})

export default hoursSlice.reducer