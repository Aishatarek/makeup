import React from 'react';
const Login = (props) => {
const  {email , password ,setEmail ,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}=props;
return(
<div>
<div className="formmmmmmmm">
    <label>username</label>
    <input type="text" autoFocus required value={email} onChange={e=>setEmail(e.target.value)}   />
<p>{emailError}</p>
<label>password</label>
    <input type="password" autoFocus required value={password} onChange={e=>setPassword(e.target.value)}   />
<p>{passwordError}</p>

{hasAccount? (<div><button onClick={handleLogin}>Sign in</button><p>Don't have <span className="imppp" onClick={()=>setHasAccount(!hasAccount)}>sign up</span></p></div>):(<div><button onClick={handleSignup}>sign up</button><p>have an account<span  className="imppp" onClick={()=>setHasAccount(!hasAccount)}>sign in</span></p></div>)}
</div>

</div>


)


}
export default Login;