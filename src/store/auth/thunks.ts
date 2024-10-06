import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch: AppDispatch) => {
       
    dispatch(checkingCredentials());

    const result =   await singInWithGoogle();
    if (!result.ok)  return dispatch(logout(result.errorMessage));  
    dispatch (login(result));
    };
};

export const startCreatingUserWithEmailPassword=({email,password,displayName})=>{
    console.log(email);    
    return async (dispatch: AppDispatch) => {
   
        dispatch(checkingCredentials());
    
        const result =   await registerUserWithEmailPassword({email,password,displayName});
       
        if (!result.ok)  return dispatch(logout(result.errorMessage));  
        dispatch (login(result));
        };
}