import { createSlice } from '@reduxjs/toolkit'

export enum authState{
    cheking="cheking",
    notAuthenticated="notAuthenticated",
    authenticated="authenticated"
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
    login: (state,{ payload }) => {
    state.status=authState.authenticated;
    state.uid=payload.uid;
    state.email=payload.email;
    state.photoURL=payload.photoURL;
    state.displayName=payload.displayName;
  
    }, 

   logout: (state,{payload}) => {
    state.status=authState.notAuthenticated;
    state.uid="";
    state.email="";
    state.photoURL="";
    state.displayName="";
    state.errorMessage=payload;
    },
    checkingCredentials: (state) => {
        state.status=authState.cheking
    }
  }
})

// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials} = authSlice.actions

export default authSlice.reducer