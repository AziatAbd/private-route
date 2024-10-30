import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({
   fallbackPath,
   component: Component,
   role,
   roles,
   isAuth,
}) => {
   const isAllowed = () => roles.includes(role)

   if (isAuth && isAllowed) {
      return Component
   }

   return <Navigate to={fallbackPath} />
}

export default ProtectedRoute
