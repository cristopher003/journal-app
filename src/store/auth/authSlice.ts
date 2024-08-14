import { createSlice } from '@reduxjs/toolkit'

export enum authState{
    "cheking",
   "notAuthenticated",
    "authenticated"
}

export interface AuthState {
    status:authState,
    uid:string,
    email:string,
    displayName:string,
    photoURL:string,
    errorMessage:string
}

const initialState: AuthState = {
status:authState.notAuthenticated,
uid:"",
email:"",
displayName:"",
photoURL:"",
errorMessage:""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {
    
    }, 
    logout: (state,payload) => {
    
    },
    checkingCredentials: (state) => {
        state.status=authState.cheking
    }
  }
})

// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials} = authSlice.actions

export default authSlice.reducer