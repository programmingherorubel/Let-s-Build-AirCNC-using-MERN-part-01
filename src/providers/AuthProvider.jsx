import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import { toast } from 'react-hot-toast'
import { saveUser } from '../components/api/Auth'

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState('')

  const createUser = (email, password,name,photoURL) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          setUser(user)
          // save data to database 
          console.log(user)
          
          saveUser(user)
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photoURL
            }).then(() => { 
            }).catch((error) => {
            });

          toast.success('Successfully Login Complete');
          setLoading(false)
      })
      .catch((error) => {
          setLoading(true)
          const errorMessage = error.message;
          toast.error(errorMessage)
          setLoading(false)
          setError(errorMessage)
      });
  }

  const signIn = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      setUser(user)
      toast.success('Successfully Login Complete');
          setLoading(false)
  })
  .catch((error) => {
      setLoading(true)
      const errorMessage = error.message;
       toast.error(errorMessage)
      setLoading(false)
      setError(errorMessage)
  });
  }

  const signInWithGoogle = () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      // save data to database 
      setUser(user)
      saveUser(user)
      toast.success('Successfully Login Complete');
          setLoading(false)
  })
  .catch((error) => {
      setLoading(true)
      const errorMessage = error.message;
       toast.error(errorMessage)
      setLoading(false)
      setError(errorMessage)
  });
  }

  const resetPassword = email => {
    setLoading(true)
    sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    setLoading(true)
    signOut(auth)
  }

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    error,
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider





