import {Navigate} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export default function RedirectOnAuth() {
    const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? (<Navigate to="/dashboard" replace/>) : (<Navigate to="/login" replace/>)
}
