import React , {useState , useEffect} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../fire';
import Login from './Login';
import Hero from './Hero';
;
const Signin = () =>{
    
 const [ user , setUser]= useState('');
 const [ email , setEmail]= useState('');
 const [ password , setPassword]= useState('');
 const [ emailError , setEmailError]= useState('');
 const [ passwordError , setPasswordError]= useState('');
 const [ hasAccount , setHasAccount]= useState(false);
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };
 
 const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
 }
 const handleLogin=()=>{
    clearErrors();
firebase
    .auth()
    .signInWithEmailAndPassword(email , password)
    .catch(err => {
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
    });
 };
 const handleSignup=()=>{
    clearErrors();
firebase
    .auth()
    .createUserWithEmailAndPassword(email , password)
    .catch(err => {
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
      
            setEmailError(err.message);
            break;
            case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
    });


 }
 const handleLogout = () => {
    firebase.auth().signOut();
 }
 const authListener = () => {
firebase.auth().onAuthStateChanged(user=>{
        if(user){
           
            setUser(user);
        }else{
            setUser('');
        }
    });
     }
     useEffect(() => {
        authListener();
     }, [])
return(

<div>
    
{user? (
    <div className="outtt">
          <h2>welcome {firebase.auth().currentUser.displayName}{email}</h2>
    <img  src="images/pngwing.com.png" alt="" />
    <Hero handleLogout={handleLogout} email={email} />

    </div>
):(
    <div className="signinnn">
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
<Login email={email} 
setEmail={setEmail}
 password={password}
 setPassword={setPassword} 
handleLogin={handleLogin}
handleSignup={handleSignup}
hasAccount={hasAccount}
setHasAccount={setHasAccount}
emailError={emailError}
passwordError={passwordError}
/>
</div>
)

}




</div>


)



}
export default Signin;