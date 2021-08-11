import { createSlice } from '@reduxjs/toolkit'

export const counterHandle = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  
  },
})

export const { increment, decrement} = counterHandle.actions

export default counterHandle.reducer;