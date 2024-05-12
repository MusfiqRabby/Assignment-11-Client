import { useContext } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <div className='text-center'>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  }
  if (user) return children

  return <Navigate to='/login' state={location.pathname} replace={true} />
}

export default PrivateRoute