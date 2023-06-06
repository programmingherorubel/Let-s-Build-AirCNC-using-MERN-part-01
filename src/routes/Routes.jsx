import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/Pages/Home'
import Login from '../components/Login/Login'
import SignUp from '../components/Signup/SignUp'
import RoomDetails from '../components/Pages/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashbordLayout from '../layouts/DashbordLayout'
import AddRoom from '../components/Pages/Dashbord/AddRoom'
import { getRoom } from '../components/api/addRooms'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'room/:detail',
        element:<PrivateRoute><RoomDetails /></PrivateRoute>,
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/dashbord',
    element:<DashbordLayout></DashbordLayout>,
    children:[
      {
        path:'/dashbord/add-room',
        element:<AddRoom/>
      }
    ]
  }
])
