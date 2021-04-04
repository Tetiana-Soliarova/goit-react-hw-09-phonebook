import React, {useEffect,  Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from './component/Container'
import Header from './component/Header/Header'
import { getCurrentUser } from './redux/auth/auth-operations'
import { useDispatch } from 'react-redux'
import PrivateRoute from './component/PrivateRoute'
import PublicRoute from './component/PublicRoute'

const Home = lazy(() => import('./views/HomePage/HomePage'))
const Login = lazy(() => import('./views/Login/Login'))
const Phonebook = lazy(() => import('./component/ContactForm/Phonebook'))
const Register = lazy(() => import('./views/Register/Register'))




export default function App() { 
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch])
   

  return (
      <Container>
        <Header />

        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
          <Route exact path="/" component={Home} />
          
            <PublicRoute
              path="/register"
              redirectTo="/contacts"
              restricted
              //component={Register}
          >
            <Register/>     
            </PublicRoute>
          
            <PublicRoute
              path="/login"
              redirectTo="/contacts"
              restricted
              //component={Login}
          > 
            <Login/>  
          </PublicRoute>
          
            <PrivateRoute path="/contacts" component={Phonebook} />
          </Switch>
        </Suspense>
      </Container>
    )
} 
/*class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser()
  }

  render() {
    return (
      <Container>
        <Header />

        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute
              path="/register"
              redirectTo="/contacts"
              restricted
              component={Register}
            />
            <PublicRoute
              path="/login"
              redirectTo="/contacts"
              restricted
              component={Login}
            />
            <PrivateRoute path="/contacts" component={Phonebook} />
          </Switch>
        </Suspense>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)
*/