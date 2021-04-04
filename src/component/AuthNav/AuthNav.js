import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import router from '../../routes';
import styleAuthNav from './stylesAuthNav.module.css'


class AuthNav extends Component{

    render() {
       
        return (
            <ul>
                <NavLink
                    to={router.register}
                    exact
                    className={styleAuthNav.link}
                    activeClassName={styleAuthNav.activeLink}
                    
                >
                    Регистрация
        </NavLink>
        
                <NavLink
                    to={router.login}
                    exact
                    className={styleAuthNav.link}
                    activeClassName={styleAuthNav.activeLink}
                    
                >
                    Вход
        </NavLink>
            </ul>
        )
    }
};
export default AuthNav;