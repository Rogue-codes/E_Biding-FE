import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces'

// Define a type for the slice state
interface IInitialSTate {
  user: IUser | null
}



// Define the initial state using that type
const initialState: IInitialSTate = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action:PayloadAction<IUser>) => {
      state.user = action.payload
    },
  },
})

export const { login } = authSlice.actions


export default authSlice.reducer