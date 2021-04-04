import React, { useState } from 'react';
import styleRegister from './styleRegister.module.css'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/auth-operations'

export default function RegisterForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const hendleNameChange = (evt) => {
    setName(evt.target.value)
  };

  const hendlePasswordChange = (evt) => {
    setPassword(evt.target.value )
  }

  const hendleEmailChange = (evt) => {
    setEmail(evt.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(register({name, email, password}))
    
    setName(name);
    setPassword(password);
    setEmail(email)
  }


  return (
      <form
        onSubmit={handleSubmit}
        className={styleRegister.demoForm}
        autoComplete="off"
      >
        <div className={styleRegister.container}>
          <h1> Регистрация</h1>
          <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
          <hr />
          <div className={styleRegister.formGroup}>
            <label htmlFor="name">Имя</label>
            <input
              type="name"
              className={styleRegister.formControl}
              name="name"
              onChange={hendleNameChange}
            />
          </div>
          <div className={styleRegister.formGroup}>
            <label htmlFor="email">Почта</label>
            <input
              type="email"
              className={styleRegister.formControl}
              name="email"
              onChange={hendleEmailChange}
            />
          </div>
          <div className={styleRegister.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={styleRegister.formControl}
              name="password"
              onChange={hendlePasswordChange}
            />
          </div>
        </div>
        <button type="submit" className={styleRegister.registerbtn}>
          Зарегистрироватся
        </button>
      </form>
    )
}



/*
class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  hendleNameChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onRegister(this.state) //

    this.setState({ name: '', email: '', password: '' })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={styleRegister.demoForm}
        autoComplete="off"
      >
        <div className={styleRegister.container}>
          <h1> Регистрация</h1>
          <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
          <hr />
          <div className={styleRegister.formGroup}>
            <label htmlFor="name">Имя</label>
            <input
              type="name"
              className={styleRegister.formControl}
              name="name"
              onChange={this.hendleNameChange}
            />
          </div>
          <div className={styleRegister.formGroup}>
            <label htmlFor="email">Почта</label>
            <input
              type="email"
              className={styleRegister.formControl}
              name="email"
              onChange={this.hendleNameChange}
            />
          </div>
          <div className={styleRegister.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={styleRegister.formControl}
              name="password"
              onChange={this.hendleNameChange}
            />
          </div>
        </div>
        <button type="submit" className={styleRegister.registerbtn}>
          Зарегистрироватся
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  onRegister: register,
}

export default connect(null, mapDispatchToProps)(RegisterForm)
*/