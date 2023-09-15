import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {message:"none"},
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
      getMovie: (state,action) => {
        console.log(action)
       state.value = action.payload
      }
     
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { getMovie } = movieSlice.actions
  
  export default movieSlice.reducer