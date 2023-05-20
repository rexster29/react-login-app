import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/common/Form';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const useEffect = () => {
    let authToken = sessionStorage.getItem('Auth Token');

    if(authToken){
      window.location = '/home';
    }
    else{
      window.location = '/register';
    }
  }
  const handleAction = (id) => {
    if(id == 1){
      //signInWithEmailAndPassword(email, password)
      axios.post('http://localhost:5000/users/signin', {email, password})
        .then(res => {
            console.log(res.data)
            console.log('Sign in successfully!!!')
            window.location = '/home';
            sessionStorage.setItem('Auth Token', res.data.token);
        })
        .catch(err => {
            console.log(err);
      })
    }
    else if(id == 2){
      //createUserWithEmailAndPassword(email, password)
        axios.post('http://localhost:5000/users/signup', {email, password})
        .then(res => {
          console.log(res.data)
          window.location = '/home';
          sessionStorage.setItem('Auth Token', res.data.token);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Routes>
            <Route 
              path='/' 
                element={
                  <Form title='Login' setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)}/>} 
            />
            <Route 
              path='/register' 
              element={ sessionStorage.getItem("Auth Token") ? 
                <Form title='Register' setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)}/> : <Navigate to='/' />} 
            />
            <Route path='/home' element={ sessionStorage.getItem("Auth Token") ? <Home /> : <Navigate to='/' />}/>
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
