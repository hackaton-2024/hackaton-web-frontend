import { useState } from "react"
import { Navigate, useLocation } from "react-router-dom"


import { useAuthContext } from "../hooks/useAuthContext"

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext()

  const { pathname } = useLocation()

  const [requestedLocation, setRequestedLocation] = useState(null)

  if (!isInitialized) {
    return "Зареждане..."
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <>{children}</>
}
