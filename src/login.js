import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './image/logo.jpeg';

class Login extends Component {
    state = {
        email: '',
        password: '',
        loginError: false,
        dataMissing: false,
        emailFormatNotMatch: false,
        passwordFormatNotMatch: false
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event.target.value
        })
    };

    handleLogin = (e) => {
        var email = /\S+@\S+\.\S+/;
        var pass = /^(?=.*?[A-Z]).{8,}/
        e.preventDefault();
        if (this.state.email === "" || this.state.password === "") {
            this.setState({
                dataMissing: true
            })
        }
        else if (!(email.test(this.state.email))) {
            this.setState({
                emailFormatNotMatch: true
            })
        }
        else if (!(pass.test(this.state.password))) {
            this.setState({
                passwordFormatNotMatch: true
            })
        }
        else if (this.state.email === "Clarion@clarion.com" && this.state.password === "Clarion123") {
            this.props.history.push({
                pathname: '/dashboard',
                state: { email: this.state.email }

            })
        }
        else {
            this.setState({
                loginError: true
            })
        }
    }

    render() {

        return (

            <div className="row" style={{ "height": "100%", "width": "100%" }}>

                <div className="col-4">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="mt-2" alt="logo" width="120px" height="120px" />
                    </Link>
                    <form>
                        <div class="form-group">
                            <label >Email</label>
                            <input type="email" value={this.state.email} onChange={(event) => this.handleChange("email", event)} class="form-control" />
                        </div>
                        <div class="form-group">
                            <label >Password</label>
                            <input type="password" value={this.state.password} onChange={(event) => this.handleChange("password", event)} class="form-control" />
                        </div>
                        <button type="submit" onClick={this.handleLogin} className="btn btn-dark">Login</button>
                    </form>

                    {this.state.loginError ?
                        <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                            Unauthorized Email id or password !
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ loginError: false })}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        : null}
                    {this.state.dataMissing ?
                        <div class="alert alert-warning alert-dismissible fade show  mt-2" role="alert">
                            Enter all detail !
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ dataMissing: false })}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        : null}
                    {this.state.emailFormatNotMatch ?
                        <div class="alert alert-warning alert-dismissible fade show  mt-2" role="alert">
                            Enter email in valid format !
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ emailFormatNotMatch: false })}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        : null}
                    {this.state.passwordFormatNotMatch ?
                        <div class="alert alert-warning alert-dismissible fade show  mt-2" role="alert">
                            Password Must contain at least one uppercase and at least 8 or more characters
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ passwordFormatNotMatch: false })}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        : null}


                </div>
                <div className="col-8 background">
                </div>
            </div>

        )
    }
}



export default Login