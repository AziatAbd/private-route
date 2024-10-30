import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout.jsx'
import Main from '../pages/user/Main.jsx'
import About from '../pages/user/About.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import Admin from '../pages/admin/Admin.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import { useSelector } from 'react-redux'
import Profile from '../pages/user/Profile.jsx'

const AppRoutes = () => {
   const { userData } = useSelector((state) => state.auth)

   console.log(userData)

   const router = createBrowserRouter([
      {
         path: '/',
         element: (
            <ProtectedRoute
               component={<UserLayout />}
               fallbackPath={'/admin'}
               role={userData.role}
               roles={['USER', 'GUEST']}
               isAuth={
                  userData.role === 'USER' ? userData.isAuth : !userData.isAuth
               }
            />
         ),
         children: [
            {
               index: true,
               element: <Main />,
            },
            {
               path: '/about',
               element: <About />,
            },
         ],
      },

      {
         path: '/',
         element: (
            <ProtectedRoute
               component={<UserLayout />}
               fallbackPath={'/admin'}
               role={userData.role}
               roles={['USER']}
               isAuth={userData.isAuth}
            />
         ),
         children: [
            {
               path: '/profile',
               element: <Profile />,
            },
         ],
      },
      {
         path: '/admin',
         element: (
            <ProtectedRoute
               component={<AdminLayout />}
               fallbackPath={'/'}
               role={userData.role}
               roles={['ADMIN']}
               isAuth={userData.isAuth}
            />
         ),
         children: [
            {
               index: true,
               element: <Admin />,
            },
         ],
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRoutes
