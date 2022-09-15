import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,sendSignInLinkToEmail} from "firebase/auth";
import { auth,actionCodeSettings }  from "./firebase"

export const SignUpUser = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.error(error)
      });
}
export const LogInUser = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      });
}
export const SendEmailLink = (email) => {
    // console.log('url')
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    console.log('Email link was successfully sent');
    window.localStorage.setItem('emailForSignIn', email); 
  })
  .catch((error) => {
    console.log(error)
    // ...
  });

}