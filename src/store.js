import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/CounterHandle'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})