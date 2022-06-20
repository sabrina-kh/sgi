import { configureStore } from '@reduxjs/toolkit'

//import reducers 
import AuthReducer from "../store/reducers/auth.reducer"

export const store = configureStore({
  reducer: {
    auth: AuthReducer
  },
})