import React from 'react';
import { connect } from 'react-redux';

import PrimaryButton from '../../components/PrimaryButton';
import ErrorMessage from '../../components/ErrorMessage';
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
      error: '',

      isAuth: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const data = await actions.login(this.state);

    if (data.type === 'ERROR') {
      this.handleError(data.message);
    }
    else this.props.dispatch(data);
  }
  handleChange(e) {
    const target = e.target;

    this.setState({
      [target.name]: target.value,
    });
  }
  handleError(error) {
    this.setState({
      error: error,
    });
  }

  render() {
    const {
      password,
      nickname,
      isAuth,
      login,
      error,
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

          <ErrorMessage error={error} border="left" />
        </Card>
      </Container>
    );
  }
};

export default connect()(LoginPage);