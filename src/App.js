import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import { AppContext } from './context/AppContextProvider';

function App() {
  
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const {token, theme} = useContext(AppContext);
  
  const handleSubmit = () => {
    if(auth)
    {
      setName("");
    }
    setAuth(!auth);
  
  }

  return (
    <>
    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter name'/>
    <button onClick={handleSubmit}>{auth ? "logout" : "login" }</button>
    {auth ? `your theme and token is: ${theme} and ${token}`  : "user has to login"}
    </>
  );
}

export default App;
