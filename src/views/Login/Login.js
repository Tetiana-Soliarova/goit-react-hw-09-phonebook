import React, { useState, useEffect } from 'react';
import {useDispatch } from 'react-redux'
import styleRegister from '../Register/styleRegister.module.css';
import {logIn} from '../../redux/auth/auth-operations'



export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const updateEmail = evt => {
    setEmail(evt.target.value)
  }

 const updatePassword = evt => {
   setPassword(evt.target.value)
  } 

/*hendleNameChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' })
  }
*/
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({email, password}));
    //this.props.onLogin(this.state);
    setEmail(email);
    setPassword(password)
  }
  
  useEffect(() => {
    dispatch(logIn());
  }, [dispatch])

  return (
      <form onSubmit={handleSubmit} className={styleRegister.demoForm}>
        <div className={styleRegister.container}>
          <h1> Страница логина</h1>
            <hr />

          <div className={styleRegister.formGroup}>
            <label htmlFor="login">Почта</label>
            <input
              type="login"
              className={styleRegister.formControl}
                        name="email"
            onChange={updateEmail}
            value={email}
            />
          </div> <div className={styleRegister.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={styleRegister.formControl}
                        name="password"
            onChange={updatePassword}
             value={password}
            />
          </div>
        </div>
        <button type="submit"  onSubmit={handleSubmit} className={styleRegister.registerbtn}>
          Войти
        </button>
      </form>
    )
}
/*class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  hendleNameChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styleRegister.demoForm}>
        <div className={styleRegister.container}>
          <h1> Страница логина</h1>
            <hr />

          <div className={styleRegister.formGroup}>
            <label htmlFor="login">Почта</label>
            <input
              type="login"
              className={styleRegister.formControl}
                        name="email"
                        onChange={this.hendleNameChange }
            />
          </div> <div className={styleRegister.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={styleRegister.formControl}
                        name="password"
                        onChange={this.hendleNameChange }
            />
          </div>
        </div>
        <button type="submit"  onSubmit={this.handleSubmit} className={styleRegister.registerbtn}>
          Войти
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
}

export default connect(null, mapDispatchToProps)(LoginForm);*/
