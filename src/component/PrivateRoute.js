import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getToken } from '../redux/auth/auth-selector'

export default function PrivateRoute ({
  redirectTo,
  children,
  ...routeProps
}) {
  const token = useSelector(getToken);
  return (
    <Route {...routeProps}>
      {token ? children : 
        <Redirect to={redirectTo} />
      }
     </Route>
  
  )}

/*
const mapStateToProps = (state) => ({
  token: getToken(state),
})

export default connect(mapStateToProps)(PrivateRoute)*/
