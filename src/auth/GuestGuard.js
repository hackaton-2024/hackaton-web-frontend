
import { Navigate } from "react-router-dom"

import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect } from "react"



export default function GuestGuard({ children }) {
  const {isAuthenticated, isInitialized} = useAuthContext()

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

    console.log(isInitialized)

  if (!isInitialized) {
    return "Зареждане..."
  }

  return <>{children}</>
}
