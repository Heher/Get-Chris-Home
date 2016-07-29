import React from 'react'
import { Link } from 'react-router'

import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import PaymentForm from './PaymentForm'

require('../css/login.sass')

export default class Register extends React.Component {
  handleFacebookLogin(response) {
    this.props.findOrCreateFacebookUser(response)
  }

  handleGoogleLogin(response) {
    this.props.findOrCreateGoogleUser(response)
  }

  render() {
    const { currentUser } = this.props

    if (currentUser._id) {
      return null
    } else {
      return (
        <div className="login-wrapper">
          <p>Register with Facebook or Google</p>
          <div className="login-buttons">
            <FacebookLogin
              appId="1706414629623051"
              textButton=""
              fields="first_name, last_name, email"
              callback={this.handleFacebookLogin.bind(this)}
              cssClass="facebook-login"
              icon="fa-facebook"
            />
            <GoogleLogin
              clientId="813058411917-1su4rbp4op2fjenk5bgmra7jiafoc7fr.apps.googleusercontent.com"
              buttonText=""
              callback={this.handleGoogleLogin.bind(this)}
              cssClass="google-login"
            >
              <i className="fa fa-google"></i>
            </GoogleLogin>
          </div>
        </div>
      )
    }
  }
}