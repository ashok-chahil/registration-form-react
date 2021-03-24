import React, {Component} from "react"
import './App.css';
import {Route, Switch, withRouter, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_name:"",
            user_email:"",
            password:"",
            user_name_error:"",
            user_email_error:"",
            password_error:""
        }
    }

    handleChangeName = (event) => {
        this.setState({user_name:event.target.value, user_name_error:""})
    }

    handleChangeEmail = (event) => {
        this.setState({user_email:event.target.value, user_email_error:""})
    }

    handlePassword = (event) =>{
        this.setState({password:event.target.value, password_error:""})
    } 

    validate = () => {
        let user_name_error = "";
        let user_email_error = "";
        let password_error = "";

        if (!this.state.user_name) {
            user_name_error = "Name cannot be blank";
        }

        if (!this.state.user_email.includes("@")) {
            user_email_error = "Invalid email";
        }

        if (!this.state.password) {
            password_error = "Password cannot be blank";
        }

        if (user_email_error || user_name_error || password_error) {
            this.setState({ user_email_error, user_name_error , password_error});
            return false;
        }
        return true;
    }

    handleSubmit = (event) => { 
        const isValid = this.validate();
        if(isValid){
            alert("Details have been captured successfully.")
        }

    }

    rightSectionUI = () => {
            return (
                <div className="padding-section">
                    <div className="left-top">
                       <h2 className="left-header">Registration form</h2>
                       <div className="sub-text-right">
                            <p className="content">Below details required for the form submission.</p>
                       </div>
                    </div>
                    <form autoComplete="off">
                        <div className="form-style">
                            <div className="label">Name*</div>
                            <TextField
                                id="name"
                                placeholder="Enter name"
                                variant="outlined"
                                color="primary"
                                value={this.state.user_name}
                                onChange={this.handleChangeName}
                            />
                            <div className="error-message">{this.state.user_name_error}</div> 
                        </div>
                        <div className="form-style">
                            <div className="label">Email*</div>
                            <TextField
                                id="email"
                                placeholder="Enter email"
                                variant="outlined"
                                color="primary"
                                value={this.state.user_email}
                                onChange={this.handleChangeEmail}
                            />
                            <div className="error-message">{this.state.user_email_error}</div> 
                        </div>
                        <div className="form-style">
                            <div className="label">Password*</div>
                            <TextField
                                id="password"
                                placeholder="Enter password"
                                variant="outlined"
                                color="primary"
                                value={this.state.password}
                                onChange={this.handlePassword}
                            />
                            <div className="error-message">{this.state.password_error}</div>
                        </div>
                        <div className="form-style">
                            <Button
                                className="button-design"
                                id="Button"
                                variant="outlined"
                                color="primary"
                                onClick={(event) => this.handleSubmit(event)}
                            >
                                SUBMIT
                            </Button>
                        </div>
                    </form>
                </div>
            )
    }


    render() {
        return (
            <div className=" overlay app-login-container new-account-container d-flex justify-content-center align-items-center align-items-stretch">
                <div className="account-main-container">
                    <div className="left-section semi-half yg-info">
                        <div className="padding-section">
                            <div className="left-top">
                               <h2 className="left-header">We're here</h2>
                               <div className="sub-text">
                                    <p className="content">Our door is always open for a good cup of coffee.</p>
                               </div>
                            </div>
                            <div className="left-bottom">
                                <h4>Our Office</h4>
                                <a className="address" href="https://goo.gl/maps/36etXfHjYR52" target="_blank">
                                    <p>Jacob van Lennepkade 334-H</p>
                                    <p>1053 NJ Amsterdam</p>
                                    <p>The Netherlands <span className="emoji">🇳🇱</span></p>
                                </a>
                            </div>
                            <div className="social-media-icons">
                                <span className="icon-secton"><TwitterIcon /></span>
                                <span className="icon-secton"><InstagramIcon /></span>
                                <span className="icon-secton"><FacebookIcon /></span>
                            </div>
                        </div>
                    </div>
                    <div className="right-section semi-half yg-info">
                        {this.rightSectionUI()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;
