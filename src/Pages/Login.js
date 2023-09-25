import React ,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from "../store/auth-context";
 

const Login = () => {
  const navigate= useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  

      const submithandler=(event)=>{
        event.preventDefault();
        setEmail('');
        setPassword('');
        
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBv6jva7Pj_yjf3CpPvyWiv51tGzREGIOc";
    } else {
      url =
        " https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBv6jva7Pj_yjf3CpPvyWiv51tGzREGIOc";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email:email,
        password:password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
          navigate('/store');
      })
      .catch((error) => {
        alert(error.message);
      });

      setIsLogin(false);
      }
  return (
    <div>
      
    <form onSubmit={submithandler}>
        <div>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' value={email} onChange={(e)=>{ setEmail(e.target.value)}} />
        </div>

        <div>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <div >
          {!isLoading && (
            <button >
              Login 
              </button >
          )}
          {isLoading && <p>Sending request...</p>}
        
        </div>
    </form>
    </div>
  )
}

export default Login

//
  
      
