import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class StudentLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            Student: {}
        } 
        
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.dologinStudent = this.dologinStudent.bind(this);
        this.verifyLogin = this.verifyLogin.bind(this);
    }

    changeEmailHandler = (event) => {
        this.setState({email : event.target.value})
    }

    changePasswordHandler = (event) => {
        this.setState({password : event.target.value})
    }

    dologinStudent = (e) => {
        e.preventDefault();
        StudentService.loginStudent(this.state.email).then((response) =>{
            if(response.data != null){
                this.setState({Student: response.data})
                this.verifyLogin();
            }
        })
    }

    verifyLogin(){
         if(this.state.Student.email === this.state.email && this.state.Student.password === this.state.password){
            this.props.history.push('/student');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="card p-5 offset-3 col-5 shadow">
                    <h4>Login</h4>
                    <form>
                        <div className = "form-group">
                            <label> Email </label>
                            <input placeholder="Email" name="email" className="form-control" 
                                value={this.state.email} onChange={this.changeEmailHandler} />
                        </div>
                        <div className = "form-group">
                            <label> Password </label>
                                <input placeholder="Password" name="password" className="form-control" 
                                    value={this.state.password} onChange={this.changePasswordHandler} />
                        </div>
                        <button className="btn btn-success" onClick={() => this.dologinStudent()}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default StudentLogin;
