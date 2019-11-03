import React from 'react';
import { connect } from 'react-redux';

import PrimaryButton from '../../components/PrimaryButton';
import Container from '../../components/Container';
import Card from '../../components/Card';

import RegistrationForm from './RegistrationForm';
import AuthForm from './AuthForm';
import '../../styles/form.css'; 

import actions from '../../actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      nickname: '',
      login: '',

      isAuth: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const data = await actions.login(this.state);
    this.props.dispatch(data);
  }
  handleChange(e) {
    const target = e.target;

    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const {
      password,
      nickname,
      isAuth,
      login,
    } = this.state;
    let title, form;

    if (isAuth) {
      title = 'Авторизация';
      form = (
        <AuthForm
          onChange={this.handleChange}
          password={password}
          login={login}
        />
      );
    }
    else {
      title = 'Регистрация';
      form = (
        <RegistrationForm
          onChange={this.handleChange}
          password={password}
          nickname={nickname}
          login={login}
        />
      );
    }

    return (
      <Container justify="center" align="center">
        <Card title={title}>
          <form
            className="form"
            style={{width: 450 + 'px'}}
            onSubmit={this.handleSubmit}
          >
            {form}
    
            <div className="form__actions form__actions--end">
              <PrimaryButton text="Авторизация" type="submit" />
            </div>
          </form>
        </Card>
      </Container>
    );
  }
};

export default connect()(LoginPage);