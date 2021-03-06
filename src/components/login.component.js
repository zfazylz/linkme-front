import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {connect} from "react-redux";
import {login, loginViaAITU} from "../actions/auth";
import aituBridge from "@btsd/aitu-bridge";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Select from "react-select";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      aituData: {},
      sex: "U",
      isAITUSupported: false,
      loading: false,
      value: "Undefined",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  componentDidMount() {
    // this.tryLoginViaAITU()
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeSex(e) {
    this.setState({
      sex: e.value,
      value: e.Lable,
    });
  }

  tryLoginViaAITU() {
    if (aituBridge.isSupported()) {
      this.setState({loading: true});
      this.setState({isAITUSupported: true});
      this.setState({loading: false});
      aituBridge.getMe().then((response) => {
        this.setState({aituData: response});
        this.setState({loading: false});
        this.handleAITULogin();
      });
    }
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const {dispatch, history} = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(
        login(this.state.username, this.state.password, this.state.aituData)
      )
        .then(() => {
          history.push("/");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  handleAITULogin() {
    this.setState({
      loading: true,
    });
    const {aituData, sex} = this.state;
    const {dispatch, history} = this.props;

    dispatch(loginViaAITU(aituData, sex))
      .then(() => {
        history.push("/");
        window.location.reload();
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const instr = "???????????????? ?????? ??????";
    const {isLoggedIn, message} = this.props;
    const handleAITULoginOnClick = (e) => {
      e.preventDefault();
      this.tryLoginViaAITU();
    };
    if (isLoggedIn) {
      return <Redirect to="/"/>;
    }

    if (this.state.loading)
      return (
        <div className="emptyCardContainer">
          <h1>????????????????....</h1>
        </div>
      );
    let options = [
      {value: "M", label: "??????????????"},
      {value: "F", label: "??????????????"},
      {value: "U", label: "??????????????????"},
    ];
    if (aituBridge.isSupported())
      return (
        <div className="tinderCards_cardContainer">
          <div className="card emptyCardContainer">
            <img
              src="/profile-icon-512.png"
              className="profile-img-card"
              height="200"
            />
            <Select
              options={options}
              value={this.state.value}
              onChange={this.onChangeSex.bind(this)}
              placeholder={instr}
              isSearchable={false}
            />
            <Link to="" onClick={handleAITULoginOnClick}>
              <IconButton>
                <ExitToAppIcon className="header_icon" fontSize="large"/>
                ??????????
              </IconButton>
            </Link>
          </div>
        </div>
      );

    return (
      <div className="tinderCards_cardContainer">
        <div className="card emptyCardContainer">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"/>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{display: "none"}}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {isLoggedIn} = state.auth;
  const {message} = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
