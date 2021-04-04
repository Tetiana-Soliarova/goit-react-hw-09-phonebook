import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsAuthenticated } from '../redux/auth/auth-selector'

export default function PublicRoute  ({
  //component: Component,
  //isAuthenticated,
  redirectTo,
  children,
  ...routeProps
})  {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

 
   /* 
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  


const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(PublicRoute)*/
