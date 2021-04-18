import React, { Component } from 'react';
import '../style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      username: "",
      password: "",
      errors: {}
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.username === "") {
      let data = this.state.errors;
      data["user"] = true;
      this.setState({ erros: data });
    } else if (this.state.password === "") {
      let data = this.state.errors;
      data["password"] = true;
      this.setState({ erros: data });
    } else if (this.state.username !== "federico" && this.state.username !== "shadi") {
      let data = this.state.errors;
      data["invaliduser"] = true;
      this.setState({ erros: data });
    } else {
      let data = this.state.errors;
      data["invaliduser"] = false;
      this.setState({ erros: data });
      window.localStorage.setItem("username", this.state.username);
      this.props.history.push("/home");
    }
  }
  localStorageSave(user){
    localStorage.setItem("user",user);
  }

  render() {
    return (
      <div className="login-form">
        <div className="login-main">
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-5 login-form-center">
                {
                  this.state.errors.invaliduser &&
                  <h5 className="text-danger">Invalid User</h5>
                }
                <form role="form" className="login-form">
                  <div className="form-group ">
                    <label className="input-label" htmlFor="exampleInputText">Name</label>
                    <input
                      type="text"
                      className={
                        this.state.errors.user ?
                          "form-control border-danger" :
                          "form-control"
                      }
                      id="exampleInputEmail1"
                      placeholder="Enter name"
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                        this.localStorageSave(e.target.value);
                        let data = this.state.errors;
                        data["name"] = false;
                        this.setState({ erros: data });
                      }} 
                    />
                  </div>
                  <div className="form-group ">
                    <label className="input-label" htmlFor="exampleInputEmail1">Username</label>
                    <input
                      type="text"
                      className={
                        this.state.errors.user ?
                          "form-control border-danger" :
                          "form-control"
                      }
                      id="exampleInputEmail1"
                      placeholder="Enter User name"
                      onChange={(e) => {
                        this.setState({ username: e.target.value });
                        let data = this.state.errors;
                        data["user"] = false;
                        this.setState({ erros: data });
                      }} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="input-label">Password</label>
                    <input
                      type="password"
                      className={
                        this.state.errors.password ?
                          "form-control border-danger" :
                          "form-control"
                      }
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                        let data = this.state.errors;
                        data["password"] = false;
                        this.setState({ erros: data });
                      }
                      } />
                  </div>

                  <button type="submit"
                    className="btn btn-md btn-primary"
                    onClick={this.onFormSubmit.bind(this)}>Sign in
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Login;
