import React, { Fragment } from 'react';
import Input from '../../components/Input';
import '../../styles/form.css'; 

const AuthForm = ({ login, password, onChange }) => (
  <Fragment>
    <div className="form__input">
      <Input
        onChange={onChange}
        value={login}
        label="Логин"
        name="login"
       />
    </div>

    <div className="form__input">
      <Input
        onChange={onChange}
        value={password}
        name="password"
        type="password"
        label="Пароль"
      />
    </div>
  </Fragment>
);

export default AuthForm;
