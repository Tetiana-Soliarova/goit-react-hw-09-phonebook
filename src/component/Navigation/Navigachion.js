import React from 'react'
import { useSelector } from 'react-redux'
import { getIsAuthenticated } from '../../redux/auth/auth-selector'
import MenuNav from './MenuNav/MenuNav'
import AuthNav from './AuthNav/AuthNav'
import UserMenu from './UserMenu/UserMenu'
import styles from './styles.module.css'


export default function Navigation() {
 const isAuthenticated = useSelector(getIsAuthenticated)


  return (
    <ul className={styles.ulConteiner}>
    <MenuNav />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </ul>
  )
}
/*const Navigation = ({ isAuthenticated }) => (
  <ul className={styles.ulConteiner}>
    <MenuNav />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </ul>
)

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(Navigation)
*/