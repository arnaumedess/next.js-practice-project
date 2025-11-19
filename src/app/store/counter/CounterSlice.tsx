import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 5
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  }
});

export const {} = CounterSlice.actions

export default CounterSlice.reducer