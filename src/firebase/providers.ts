import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, UserCredential } from "firebase/auth";
import { firebaseAuth } from "./config";
import { FirebaseError } from "firebase/app";




const googleProvider = new GoogleAuthProvider();
export const singInWithGoogle = async () => {
  try {
    const result: UserCredential = await signInWithPopup(firebaseAuth, googleProvider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;

    const {displayName,email,photoURL,uid } =result.user;

    return {
        ok:true,
        displayName,
        email,
        photoURL,
        uid
    }
 
  } catch (error: any) { // Accept any type of error initially
    if (error instanceof FirebaseError) { // Check if it's a FirebaseError
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        ok: false,
        errorMessage,
        errorCode
      };
    } else {
      // Handle other potential error types if needed
      console.error("An unexpected error occurred:", error); 
      return {
        ok: false,
        errorMessage: "An unexpected error occurred. Please try again."
      };
    }
  }
}


export const registerUserWithEmailPassword= async({email,password,displayName})=>
{
  try {
    console.log(email);
    const resp= await createUserWithEmailAndPassword(firebaseAuth,email,password);
    const {uid,photoURL}=resp.user;
    await updateProfile(firebaseAuth.currentUser,{displayName});
//Actualizar el displayname
    
    return {
      ok:true,
      photoURL,
      email,
      displayName,
      uid
  }

  } catch (error) {
    if (error instanceof FirebaseError) { // Check if it's a FirebaseError
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        ok: false,
        errorMessage,
        errorCode
      };
    } else {
      // Handle other potential error types if needed
      console.error("An unexpected error occurred:", error); 
      return {
        ok: false,
        errorMessage: "An unexpected error occurred. Please try again."
      };
    }
  }
}