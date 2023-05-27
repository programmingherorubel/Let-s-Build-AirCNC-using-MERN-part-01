import { Link } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import {FaSpinner} from 'react-icons/fa'

const SignUp = () => {
  const{createUser,updateUserProfile,loading,signInWithGoogle,error,user} = useContext(AuthContext)
  const api_Key = `5528744d6a1a320dde7b1fb03bf1f442`
  const singinwithGoogle = ()=>{
    signInWithGoogle()
    // navigate('/')
  }
 

  const handeler = (event)=>{
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value 
    const name = event.target.name.value
    console.log(name)

    // image upllad 
    const image = event.target.image.files[0]
    const formData = new FormData()
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${api_Key}`
    
    fetch(url,{
      method:'POST',
      body:formData
    })
    .then(res => res.json())
    .then(info => {
      const photoURL= info.data.image.url
      createUser(email,password,name,photoURL)
    })
  } 

  console.log(user)
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to AirCNC</p>
        </div>
        <form
          onSubmit={handeler}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading && !error ? <FaSpinner className='m-auto animate-spin' size={24}/> : <p className='text-center'>Continue</p> }
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={singinwithGoogle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
