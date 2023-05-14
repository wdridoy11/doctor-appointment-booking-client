import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from 'firebase/auth';
import app from '../utils/firebase/firebase.config';
import { useLocation } from 'react-router-dom';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const [user,setUser] = useState([]);
  const [loading,setLoading]=useState(true)

  // create user using email and password
  const createUserUsingEmail=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // user login user email 
  const loginUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // create user using google
  const createUserUsingGoogle=()=>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  // create user using github
  const createUserUsingGithub=()=>{
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth,githubProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  // logout user
  const logOut = ()=>{
    return signOut(auth)
  }
  // user login info
  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
    })
    return()=>{
      return unSubscribe();
    }
  },[])

  // user info
  const userInfo ={
    user,
    logOut,
    loginUser,
    createUserUsingEmail,
    createUserUsingGoogle,
    createUserUsingGithub,
  }

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider